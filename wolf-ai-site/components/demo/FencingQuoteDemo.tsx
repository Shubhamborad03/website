"use client";

import { useEffect, useRef } from "react";
import { runDemo } from "./fencing-anim";

const CSS = `#fqd *{box-sizing:border-box;margin:0;padding:0}
#fqd{
  --paper:#FBFBFD; --paper-2:#F2F3F7;
  --ink:#0B0D12; --ink-2:#41454F; --ink-3:#777C88;
  --line:rgba(11,13,18,.10); --line-2:rgba(11,13,18,.055);
  --blue:#0071E3; --blue-deep:#005FC0; --blue-soft:#E7F1FD;
  --btn:#6aa2fc; --btn-hot:#2E7DEF; --btn-press:#1866D6;
  --font:-apple-system,'SF Pro Text',BlinkMacSystemFont,'Helvetica Neue',system-ui,sans-serif;
  --display:-apple-system,'SF Pro Display',BlinkMacSystemFont,'Helvetica Neue',system-ui,sans-serif;
  --mono:'SF Mono',ui-monospace,'JetBrains Mono',monospace;
  --e:cubic-bezier(.16,1,.3,1);
}
#fqd svg{display:block}
#fqd button{background:none;border:0;cursor:pointer;font:inherit;color:inherit}
#fqd .app{height:100vh;display:grid;place-items:center;padding:22px}
#fqd .mark{position:fixed;top:26px;left:32px;display:flex;align-items:center;gap:11px;z-index:60}
#fqd .mark .n{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-3)}
#fqd .mark .chip{font-family:var(--mono);font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--blue);
  border:1px solid rgba(0,113,227,.3);background:var(--blue-soft);border-radius:999px;padding:4px 10px}
#fqd .stage{display:flex;gap:clamp(32px,5vw,64px);align-items:center}
#fqd /* ---------- phone ---------- */
.pcol{position:relative}
#fqd .glow{position:absolute;inset:-40px;z-index:0;
  background:radial-gradient(ellipse 50% 50% at 50% 45%,rgba(59,134,255,.16),transparent 66%)}
#fqd .phone{position:relative;z-index:1;width:318px;background:#fff;border-radius:42px;padding:9px;border:1px solid var(--line);
  box-shadow:0 2px 4px rgba(11,13,18,.04),0 30px 60px -26px rgba(11,13,18,.3),0 70px 120px -60px rgba(59,134,255,.4)}
#fqd .screen{background:var(--paper);border-radius:34px;overflow:hidden;height:clamp(500px,74vh,604px);display:flex;flex-direction:column}
#fqd .sbar{display:flex;justify-content:space-between;padding:12px 20px 4px;font-size:11px;font-weight:600}
#fqd .sitebar{display:flex;align-items:center;gap:10px;padding:10px 16px;background:#fff;border-bottom:1px solid var(--line-2)}
#fqd .slogo{width:24px;height:24px;border-radius:7px;background:var(--ink);color:#fff;display:grid;place-items:center;font-size:10px;font-weight:700}
#fqd .sitebar b{font-size:13px;letter-spacing:-.01em}
#fqd .sitebar em{margin-left:auto;font-style:normal;font-size:10.5px;color:var(--ink-3)}
#fqd .prog{display:flex;gap:4px;padding:12px 16px 0}
#fqd .pd{height:2.5px;flex:1;background:var(--line);border-radius:2px;transition:background .45s var(--e)}
#fqd .pd.on{background:var(--blue)}
#fqd .view{flex:1;overflow:hidden;padding:16px;position:relative}
#fqd /* cursor only,#fqd no click ring */
.cursor{position:absolute;left:0;top:0;z-index:41;width:22px;height:22px;pointer-events:none;
  transition:transform .72s var(--e);filter:drop-shadow(0 3px 7px rgba(11,13,18,.3))}
#fqd /* ---------- in phone ---------- */
.v-h{font-family:var(--display);font-weight:700;letter-spacing:-.022em;font-size:19px;line-height:1.15}
#fqd .v-s{font-size:12px;color:var(--ink-3);margin-top:6px;line-height:1.45}
#fqd .v-lab{font-family:var(--mono);font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-3);margin:15px 0 6px}
#fqd .v-in{border:1px solid var(--line);background:#fff;border-radius:12px;padding:11px 12px;font-size:13px;min-height:41px;
  display:flex;align-items:center;transition:all .28s var(--e)}
#fqd .v-in.hot{border-color:#9cc4fb;box-shadow:0 0 0 3px rgba(0,113,227,.08)}
#fqd .v-in.act{border-color:var(--blue);box-shadow:0 0 0 3px rgba(0,113,227,.14)}
#fqd .v-in .ph{color:#b3b7c0}
#fqd .cur{width:1.5px;height:15px;background:var(--blue);margin-left:1px;animation:bl .9s steps(2) infinite}
@keyframes bl{0%,50%{opacity:1}
#fqd 51%,#fqd 100%{opacity:0}
#fqd .v-ac{margin-top:7px;border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#fff;
  box-shadow:0 14px 30px -16px rgba(11,13,18,.28);opacity:0;transform:translateY(-6px);transition:all .4s var(--e)}
#fqd .v-ac.in{opacity:1;transform:none}
#fqd .v-ac > div{padding:9px 12px;font-size:12.5px;border-bottom:1px solid var(--line-2);transition:all .25s var(--e)}
#fqd .v-ac > div:last-child{border-bottom:none}
#fqd .v-ac > div.hi{background:var(--blue-soft)}
#fqd .v-ac > div.hot{background:#CFE3FC}
#fqd .v-ac small{display:block;color:var(--ink-3);font-size:10.5px;margin-top:1px}
#fqd .v-btn{margin-top:14px;background:var(--btn);color:#fff;border-radius:999px;padding:12px;font-size:13px;font-weight:600;
  text-align:center;transition:all .22s var(--e);box-shadow:0 1px 2px rgba(11,13,18,.06)}
#fqd .v-btn.hot{background:var(--btn-hot);box-shadow:0 6px 18px -4px rgba(0,113,227,.5),0 2px 4px rgba(11,13,18,.1);transform:translateY(-1px)}
#fqd .v-btn.press{background:var(--btn-press);transform:scale(.965) translateY(0);box-shadow:0 1px 3px rgba(11,13,18,.14)}
#fqd .v-opt{border:1px solid var(--line);background:#fff;border-radius:12px;padding:10px 12px;margin-top:8px;
  display:flex;align-items:center;gap:10px;transition:all .28s var(--e)}
#fqd .v-opt.hot{border-color:#9cc4fb;background:#F4F9FF;box-shadow:0 4px 14px -6px rgba(0,113,227,.4)}
#fqd .v-opt.sel{border-color:var(--blue);background:var(--blue-soft);box-shadow:0 4px 16px -8px rgba(0,113,227,.5)}
#fqd .v-opt b{display:block;font-size:12.5px;font-weight:600}
#fqd .v-opt small{font-size:11px;color:var(--ink-3)}
#fqd .v-tick{margin-left:auto;width:17px;height:17px;border-radius:50%;border:1px solid var(--line);flex:none;position:relative;transition:all .3s var(--e)}
#fqd .v-opt.sel .v-tick{background:var(--blue);border-color:var(--blue)}
#fqd .v-tick:after{content:"";position:absolute;left:6px;top:3px;width:4px;height:8px;border:solid #fff;
  border-width:0 1.8px 1.8px 0;transform:rotate(45deg) scale(0);transition:transform .3s var(--e) .05s}
#fqd .v-opt.sel .v-tick:after{transform:rotate(45deg) scale(1)}
#fqd .v-price{background:var(--ink);border-radius:14px;padding:16px;text-align:center;margin-top:12px;
  opacity:0;transform:scale(.96);transition:all .5s var(--e)}
#fqd .v-price.in{opacity:1;transform:none}
#fqd .v-price .n{font-family:var(--display);font-weight:700;letter-spacing:-.03em;font-size:25px;color:#fff;font-variant-numeric:tabular-nums}
#fqd .v-price .c{font-size:10.5px;color:rgba(255,255,255,.6);margin-top:6px;line-height:1.45}
#fqd .v-rows{margin-top:12px;border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#fff}
#fqd .v-rows > div{display:flex;justify-content:space-between;padding:8px 12px;font-size:12px;border-bottom:1px solid var(--line-2);
  opacity:0;transform:translateY(5px);transition:all .4s var(--e)}
#fqd .v-rows > div.in{opacity:1;transform:none}
#fqd .v-rows > div:last-child{border-bottom:none}
#fqd .v-rows span{color:var(--ink-3)}
#fqd .v-rows b{font-variant-numeric:tabular-nums}
#fqd .v-note{background:var(--blue-soft);border-radius:12px;padding:10px 12px;margin-top:10px;font-size:11.5px;
  color:var(--blue-deep);line-height:1.45;opacity:0;transform:translateY(6px);transition:all .45s var(--e)}
#fqd .v-note.in{opacity:1;transform:none}
#fqd .v-slots{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}
#fqd .v-slot{border:1px solid var(--line);background:#fff;border-radius:12px;padding:9px;text-align:center;transition:all .28s var(--e)}
#fqd .v-slot.hot{border-color:#9cc4fb;background:#F4F9FF;box-shadow:0 4px 14px -6px rgba(0,113,227,.4)}
#fqd .v-slot.sel{border-color:var(--blue);background:var(--blue-soft);box-shadow:0 4px 16px -8px rgba(0,113,227,.5)}
#fqd .v-slot b{display:block;font-size:12px;font-weight:600}
#fqd .v-slot small{font-size:10.5px;color:var(--ink-3)}
#fqd .v-map{margin-top:12px;border-radius:14px;overflow:hidden;border:1px solid var(--line)}
#fqd .v-map polygon{stroke-dasharray:420;stroke-dashoffset:420;fill-opacity:0;
  transition:stroke-dashoffset 1.4s var(--e),fill-opacity .8s var(--e) .6s}
#fqd .v-map.in polygon{stroke-dashoffset:0;fill-opacity:.12}
#fqd .v-done{text-align:center;padding:6px 0 2px}
#fqd .v-check{width:48px;height:48px;border-radius:50%;background:var(--blue-soft);display:grid;place-items:center;margin:0 auto 12px;
  transform:scale(0);transition:transform .55s var(--e)}
#fqd .v-check.in{transform:scale(1)}
#fqd .v-sms{background:var(--paper-2);border-radius:14px;padding:12px;margin-top:14px;opacity:0;transform:translateY(10px);transition:all .5s var(--e)}
#fqd .v-sms.in{opacity:1;transform:none}
#fqd .v-sms .f{font-family:var(--mono);font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-3);margin-bottom:8px}
#fqd .v-bub{background:#fff;border:1px solid var(--line);border-radius:12px;border-bottom-left-radius:3px;padding:10px 12px;
  font-size:11.5px;line-height:1.55;color:var(--ink-2)}
#fqd .v-bub b{color:var(--ink);font-weight:600}
#fqd .fade{animation:fin .5s var(--e)}
@keyframes fin{from{opacity:0;transform:translateY(8px)}
#fqd to{opacity:1;transform:none}
#fqd /* ---------- step rail: scrolls inside itself,#fqd page never moves ---------- */
.rail{position:relative;width:clamp(388px,40vw,498px);height:clamp(500px,74vh,604px);overflow:hidden}
#fqd .rail::before,#fqd .rail::after{content:"";position:absolute;left:0;right:0;height:80px;z-index:5;pointer-events:none}
#fqd .rail::before{top:0;background:linear-gradient(var(--paper),rgba(251,251,253,.85) 55%,rgba(251,251,253,0))}
#fqd .rail::after{bottom:0;background:linear-gradient(rgba(251,251,253,0),rgba(251,251,253,.85) 45%,var(--paper))}
#fqd .track{position:absolute;left:0;right:0;top:0;padding:0 14px;transition:transform .75s var(--e)}
#fqd .step{background:#fff;border:1px solid var(--line);border-radius:22px;padding:20px 22px;margin-bottom:11px;
  opacity:.28;transition:opacity .55s var(--e),border-color .55s var(--e),box-shadow .55s var(--e),transform .55s var(--e)}
#fqd .step.on{opacity:1;border-color:rgba(0,113,227,.3);transform:scale(1.015);
  box-shadow:0 1px 2px rgba(11,13,18,.04),0 22px 46px -26px rgba(0,113,227,.55)}
#fqd .step.done{opacity:.4}
#fqd .step-h{display:flex;align-items:center;gap:12px;margin-bottom:9px}
#fqd .step-n{width:30px;height:30px;border-radius:50%;background:var(--paper-2);color:var(--ink-3);
  font-family:var(--mono);font-size:12px;font-weight:600;display:grid;place-items:center;flex:none;transition:all .45s var(--e)}
#fqd .step.on .step-n{background:var(--blue);color:#fff;box-shadow:0 4px 12px -3px rgba(0,113,227,.6)}
#fqd .step.done .step-n{background:var(--blue-soft);color:var(--blue)}
#fqd .step h3{font-family:var(--display);font-weight:700;letter-spacing:-.02em;font-size:17px}
#fqd .step p{font-size:14px;color:var(--ink-2);line-height:1.5}
#fqd .step .why{font-size:13.5px;color:var(--blue);font-weight:500;margin-top:9px;
  max-height:0;opacity:0;overflow:hidden;transition:all .5s var(--e)}
#fqd .step.on .why{max-height:120px;opacity:1}
#fqd .again{position:fixed;bottom:26px;right:32px;z-index:60;font-family:var(--mono);font-size:10px;letter-spacing:.16em;
  text-transform:uppercase;color:var(--ink-3);border:1px solid var(--line);border-radius:999px;
  padding:10px 20px;background:#fff;transition:all .2s}
#fqd .again:hover{color:var(--ink);border-color:var(--ink)}
#fqd .credit{position:fixed;bottom:26px;left:32px;z-index:60;font-family:var(--mono);font-size:9.5px;
  color:var(--ink-3);letter-spacing:.1em;text-transform:uppercase}
@media(max-width:940px){#fqd,#fqd{overflow:auto}
#fqd .app{height:auto;padding:80px 22px 90px}
#fqd .stage{flex-direction:column;gap:36px}
#fqd .rail{width:min(470px,92vw);height:auto}
#fqd .rail::before,#fqd .rail::after{display:none}
#fqd .track{position:static;padding:0;transform:none !important}
#fqd .step{opacity:1}
#fqd .cta{position:fixed;top:22px;right:32px;z-index:60;display:inline-flex;align-items:center;gap:8px;
  border-radius:999px;background:var(--btn);color:#fff;padding:11px 20px;font-size:13.5px;font-weight:600;
  text-decoration:none;box-shadow:0 1px 2px rgba(11,13,18,.06);transition:all .22s var(--e)}
#fqd .cta:hover{background:var(--btn-hot);transform:translateY(-1px);
  box-shadow:0 8px 22px -6px rgba(0,113,227,.55),0 2px 4px rgba(11,13,18,.1)}
#fqd .cta span{transition:transform .22s var(--e)}
#fqd .cta:hover span{transform:translateX(3px)}
#fqd .credit{text-decoration:none;transition:color .2s}
#fqd .credit:hover{color:var(--ink)}
@media(max-width:940px){
  #fqd .cta{position:static;display:inline-flex;margin:0 auto}
  #fqd .mark{position:static;justify-content:center;padding-top:26px}
  #fqd .app{padding-top:20px}
  #fqd .credit{position:static;display:block;text-align:center;margin-top:28px}
  #fqd .again{position:static;display:block;margin:18px auto 0}
}
`;

export default function FencingQuoteDemo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const stop = runDemo(el);
    return () => {
      document.body.style.overflow = prev;
      if (typeof stop === "function") stop();
    };
  }, []);

  return (
    <div id="fqd" ref={ref}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="mark">
        <span className="n">Instant Quote</span>
        <span className="chip">Fencing demo</span>
      </div>

      <a className="cta" href="https://z8d9iav9qs2.typeform.com/to/zTzcDJPm">
        Add this to your website
        <span aria-hidden>&rarr;</span>
      </a>

      <div className="app">
        <div className="stage">
          <div className="pcol">
            <div className="glow" />
            <div className="phone">
              <div className="screen">
                <div className="sbar"><span>9:41</span><span>&#9679;&#9679;&#9679; &#9096; &#9646;</span></div>
                <div className="sitebar">
                  <div className="slogo">CF</div><b>Coastline Fencing</b><em>their website</em>
                </div>
                <div className="prog" id="prog" />
                <div className="view" id="view">
                  <svg className="cursor" id="cur" viewBox="0 0 22 22" width="22" height="22">
                    <path d="M4 2.2 L4 17.4 L8.1 13.6 L10.7 19.3 L13.4 18 L10.8 12.4 L16.3 12.1 Z"
                          fill="#0B0D12" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="rail"><div className="track" id="steps" /></div>
        </div>
      </div>

      <a className="credit" href="/">Wolf AI</a>
      <button className="again" id="again">Watch again</button>
    </div>
  );
}
