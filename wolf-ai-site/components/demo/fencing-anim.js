/* Instant Quote fencing demo: imperative timeline. Plain JS on purpose. */
export function runDemo(rootEl) {

var root=rootEl; var $=function(s){return root.querySelector(s)};
var view=$('#view'), cur=$('#cur');
var sleep=function(ms){return new Promise(function(r){setTimeout(r,ms)})};
var run=0;

var STEPS=[
 {t:"She types her address",
  b:"No form and no waiting for a callback. The first thing she sees is one box, and the suggestions come from the government address register, so every one is a real block of land.",
  w:"Every other fencing site opens with a contact form. This one opens with an answer."},
 {t:"Her boundary appears on the map",
  b:"We draw the registered boundary of her block and show how many metres of fence it needs, before anyone has been out there.",
  w:"This is the moment it stops feeling like a brochure."},
 {t:"Two taps for the fence",
  b:"Style, then whether it is replacing something or going in fresh. She is never asked how many metres she needs, because we already know.",
  w:"That is the question every other quote form leads with, and the one nobody can answer."},
 {t:"The only thing she types",
  b:"Name and mobile. Notice the order here: her number is captured before the price is shown.",
  w:"So the contractor has a real lead whether or not she carries on."},
 {t:"A real price, thirty seconds in",
  b:"A range rather than a fixed number, with the boundary lengths shown so she can see where it came from. It also flags that the rear fence has no neighbour to share the cost with.",
  w:"Honest, defensible, and it arrives in seconds instead of days."},
 {t:"She picks a time herself",
  b:"Straight off his real calendar, sitting right under the price while she is still looking at it.",
  w:"Peak interest is five seconds after the number appears, not tomorrow."},
 {t:"Both phones buzz",
  b:"She gets a confirmation. He gets her name, number, address, metres, price range and the time slot.",
  w:"He never answered a phone, opened a laptop or drove anywhere."}
];

function renderSteps(i){
  $('#steps').innerHTML=STEPS.map(function(s,k){
    return '<div class="step '+(k===i?'on':k<i?'done':'')+'">'+
      '<div class="step-h"><div class="step-n">'+(k+1)+'</div><h3>'+s.t+'</h3></div>'+
      '<p>'+s.b+'</p><div class="why">'+s.w+'</div></div>';
  }).join('');
  $('#prog').innerHTML=STEPS.map(function(_,k){return '<div class="pd '+(k<=i?'on':'')+'"></div>'}).join('');
  centreStep(i);
}

/* slide the rail internally so the active card is centred. no page scrolling. */
function centreStep(i){
  var track=$('#steps'); if(!track) return; var rail=track.parentNode, el=track.children[i];
  if(!el) return;
  if(window.innerWidth<=940){ track.style.transform='none'; return; }
  var y=el.offsetTop+el.offsetHeight/2;
  track.style.transform='translateY('+(rail.clientHeight/2-y)+'px)';
}
var onResize=function(){
  var on=root.querySelector('.step.on');
  if(on) centreStep([].indexOf.call(on.parentNode.children,on));
};
window.addEventListener('resize',onResize);

function paint(html){
  var kids=[].slice.call(view.children);
  kids.forEach(function(c){ if(c.id!=='cur') c.remove(); });
  var d=root.ownerDocument.createElement('div'); d.className='fade'; d.innerHTML=html; view.appendChild(d);
}

/* one source of truth for where the pointer is */
var cx=150, cy=330;
function place(x,y){
  cx=x; cy=y;
  cur.style.transform='translate('+(x-4)+'px,'+(y-3)+'px)';
}
place(cx,cy);

function centreOf(sel){
  var el=view.querySelector(sel); if(!el) return null;
  var a=el.getBoundingClientRect(), b=view.getBoundingClientRect();
  return {el:el, x:a.left-b.left+a.width/2, y:a.top-b.top+a.height/2};
}
async function hover(sel){
  var p=centreOf(sel); if(!p) return null;
  place(p.x,p.y);
  await sleep(760);
  p.el.classList.add('hot');
  await sleep(260);
  return p.el;
}
async function click(el){
  cur.style.transform='translate('+(cx-4)+'px,'+(cy-3)+'px) scale(.8)';
  if(el) el.classList.add('press');
  await sleep(170);
  cur.style.transform='translate('+(cx-4)+'px,'+(cy-3)+'px)';
  await sleep(260);
  if(el) el.classList.remove('hot');
}
async function press(sel){ var el=await hover(sel); await click(el); return el; }

async function type(sel,text,speed){
  speed=speed||88;
  var el=view.querySelector(sel); el.innerHTML='';
  for(var i=0;i<text.length;i++){
    el.innerHTML=text.slice(0,i+1)+'<span class="cur"></span>';
    await sleep(speed);
  }
  el.innerHTML=text;
}
async function reveal(sel,gap){
  gap=gap||200;
  var els=view.querySelectorAll(sel);
  for(var i=0;i<els.length;i++){ els[i].classList.add('in'); await sleep(gap); }
}
function countTo(sel,from,to,ms){
  var el=view.querySelector(sel), t0=performance.now();
  return new Promise(function(res){
    (function step(t){
      var p=Math.min(1,(t-t0)/ms), e=1-Math.pow(1-p,3);
      var a=Math.round((from+(to-from)*e)/100)*100;
      el.textContent='$'+a.toLocaleString('en-AU')+' to $'+(Math.round(a*1.168/100)*100).toLocaleString('en-AU');
      if(p<1) requestAnimationFrame(step); else { el.textContent='$8,900 to $10,400'; res(); }
    })(t0);
  });
}

async function play(){
  var me=++run, alive=function(){return me===run};
  cur.style.transition='none'; place(150,330); await sleep(40); cur.style.transition='';

  /* 1 */
  renderSteps(0);
  paint('<div class="v-h">What will your new fence cost?</div>'+
   '<div class="v-s">Type your address. We measure your boundary from the survey plan.</div>'+
   '<div class="v-lab">Property address</div>'+
   '<div class="v-in" id="ad"><span class="ph">Start typing</span></div>'+
   '<div class="v-ac" id="ac">'+
     '<div class="hi" id="s1">18 Harrow Street, Carindale QLD 4152<small>Brisbane City &middot; 736 m&sup2;</small></div>'+
     '<div>18 Harrow Court, Wynnum QLD 4178<small>Brisbane City</small></div>'+
     '<div>18 Harrowgate Drive, Aspley QLD 4034<small>Brisbane City</small></div>'+
   '</div>');
  await sleep(1500); if(!alive())return;
  var ad=await hover('#ad'); await click(ad);
  ad.classList.add('act');
  await type('#ad','18 Harrow'); if(!alive())return;
  await sleep(320); view.querySelector('#ac').classList.add('in');
  await sleep(1200); if(!alive())return;
  await press('#s1'); await sleep(460);

  /* 2 */
  renderSteps(1);
  paint('<div class="v-h">Is this your place?</div>'+
   '<div class="v-s">18 Harrow Street, Carindale</div>'+
   '<div class="v-map" id="mp"><svg viewBox="0 0 282 158" style="width:100%;background:#e8ebe6">'+
     '<rect width="282" height="158" fill="#e4e9e2"/>'+
     '<path d="M0 126 L282 110 L282 158 L0 158Z" fill="#d6ded4"/>'+
     '<rect x="-10" y="112" width="302" height="13" fill="#c6cbcd" transform="rotate(-3 141 119)"/>'+
     '<g opacity=".4"><circle cx="34" cy="42" r="14" fill="#9db9a4"/><circle cx="248" cy="38" r="11" fill="#9db9a4"/><circle cx="258" cy="86" r="13" fill="#9db9a4"/></g>'+
     '<polygon points="62,112 78,30 202,38 214,116" fill="#0071E3" stroke="#0071E3" stroke-width="2.2"/>'+
     '<rect x="104" y="56" width="70" height="42" rx="3" fill="#c4b6a6" stroke="#a89684" stroke-width="1.2"/>'+
     '<text x="140" y="25" fill="#41454F" font-size="8.5" font-weight="600" text-anchor="middle">Harrow Street</text>'+
   '</svg></div>'+
   '<div class="v-rows"><div><span>Land area</span><b>736 m&sup2;</b></div>'+
   '<div><span>Boundary we can fence</span><b>111.4 m</b></div></div>'+
   '<div class="v-btn" id="go">Yes, that is my place</div>');
  await sleep(380); view.querySelector('#mp').classList.add('in');
  await sleep(1500); await reveal('.v-rows > div',280); if(!alive())return;
  await sleep(1300); await press('#go'); await sleep(440);

  /* 3 */
  renderSteps(2);
  paint('<div class="v-h">What are you after?</div>'+
   '<div class="v-s">Two taps. We already have the measurements.</div>'+
   '<div class="v-opt" id="o1"><div><b>Colorbond 1.8m</b><small>Most popular</small></div><div class="v-tick"></div></div>'+
   '<div class="v-opt" id="o2"><div><b>Timber paling</b><small>Treated pine</small></div><div class="v-tick"></div></div>'+
   '<div class="v-opt" id="o3"><div><b>Aluminium slat</b><small>Low maintenance</small></div><div class="v-tick"></div></div>'+
   '<div class="v-opt" id="o4" style="margin-top:16px"><div><b>Replacing an old fence</b><small>Removal included</small></div><div class="v-tick"></div></div>'+
   '<div class="v-btn" id="nx">Next</div>');
  await sleep(1200); if(!alive())return;
  var a1=await hover('#o1'); await click(a1); a1.classList.add('sel');
  await sleep(760);
  var a4=await hover('#o4'); await click(a4); a4.classList.add('sel');
  await sleep(860);
  await press('#nx'); await sleep(440);

  /* 4 */
  renderSteps(3);
  paint('<div class="v-h">Where do we send it?</div>'+
   '<div class="v-s">We will text you a copy so you have got it saved.</div>'+
   '<div class="v-lab">Name</div><div class="v-in" id="nm"><span class="ph">Your name</span></div>'+
   '<div class="v-lab">Mobile</div><div class="v-in" id="mb"><span class="ph">04</span></div>'+
   '<div class="v-btn" id="sh">Show my estimate</div>'+
   '<div style="font-size:10.5px;color:var(--ink-3);text-align:center;margin-top:10px">Price comes next, so the lead is captured either way.</div>');
  await sleep(1100); if(!alive())return;
  var nm=await hover('#nm'); await click(nm); nm.classList.add('act');
  await type('#nm','Sarah Mitchell',78); if(!alive())return;
  nm.classList.remove('act'); await sleep(280);
  var mb=await hover('#mb'); await click(mb); mb.classList.add('act');
  await type('#mb','0412 884 331',78); if(!alive())return;
  mb.classList.remove('act'); await sleep(420);
  await press('#sh'); await sleep(500);

  /* 5 */
  renderSteps(4);
  paint('<div class="v-h">Your fence estimate</div>'+
   '<div class="v-price" id="pr"><div class="n" id="num">$0</div>'+
     '<div class="c">Including GST &middot; 1.8m Colorbond<br>Old fence removal included</div></div>'+
   '<div class="v-rows"><div><span>Side boundary A</span><b>41.4 m</b></div>'+
   '<div><span>Side boundary B</span><b>36.2 m</b></div>'+
   '<div><span>Rear boundary</span><b>33.8 m</b></div></div>'+
   '<div class="v-note" id="nt"><b>Your rear boundary backs onto a reserve.</b> No neighbour to split that section with.</div>'+
   '<div class="v-btn" id="bk">Book a time to confirm it</div>');
  await sleep(320); view.querySelector('#pr').classList.add('in');
  await sleep(380); await countTo('#num',4200,8900,1100); if(!alive())return;
  await reveal('.v-rows > div',230);
  await sleep(300); view.querySelector('#nt').classList.add('in');
  await sleep(2300); if(!alive())return;
  await press('#bk'); await sleep(460);

  /* 6 */
  renderSteps(5);
  paint('<div class="v-h">When suits you?</div>'+
   '<div class="v-s">Dave\'s actual availability. Takes about 20 minutes.</div>'+
   '<div class="v-slots">'+
     '<div class="v-slot"><b>Tue 21 Aug</b><small>2:00 pm</small></div>'+
     '<div class="v-slot"><b>Wed 22 Aug</b><small>8:30 am</small></div>'+
     '<div class="v-slot" id="sl"><b>Thu 23 Aug</b><small>9:00 am</small></div>'+
     '<div class="v-slot"><b>Thu 23 Aug</b><small>3:30 pm</small></div>'+
   '</div>'+
   '<div class="v-btn" id="cf">Confirm booking</div>'+
   '<div style="font-size:10.5px;color:var(--ink-3);text-align:center;margin-top:10px">Or just text me the estimate for now</div>');
  await sleep(1250); if(!alive())return;
  var sl=await hover('#sl'); await click(sl); sl.classList.add('sel');
  await sleep(840);
  await press('#cf'); await sleep(520);

  /* 7 */
  renderSteps(6);
  paint('<div class="v-done">'+
     '<div class="v-check" id="ck"><svg width="22" height="22" viewBox="0 0 22 22"><path d="M5 11.5l4.2 4.2L17 7" stroke="#0071E3" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'+
     '<div class="v-h">You are booked in</div>'+
     '<div class="v-s">Dave will be at 18 Harrow Street on Thursday 23 Aug, 9:00 am.</div>'+
   '</div>'+
   '<div class="v-sms" id="sm"><div class="f">Dave\'s phone, 40 seconds later</div>'+
     '<div class="v-bub"><b>New booked job</b><br>Sarah Mitchell &middot; 0412 884 331<br>18 Harrow St, Carindale<br>111.4m Colorbond, remove existing<br>Est. $8,900 to $10,400<br>Rear abuts reserve, no cost share<br><b>Thu 23 Aug, 9:00am</b></div>'+
   '</div>');
  place(150,330);
  await sleep(340); view.querySelector('#ck').classList.add('in');
  await sleep(640); view.querySelector('#sm').classList.add('in');
  await sleep(7200); if(!alive())return;
  play();
}

var againBtn=$('#again'); if(againBtn) againBtn.onclick=play;
renderSteps(0); play();
return function(){ run++; window.removeEventListener('resize',onResize); };

}
