import { Star } from "lucide-react";
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Testimonials | EZ Shower Repair & Tiling",
  description:
    "Read 40+ five-star Google reviews from real customers. EZ Shower Repair & Tiling — trusted by homeowners across Gold Coast, Brisbane & Brisbane South.",
};

const reviews = [
  { name: "Abbie", text: "Sunny is very knowledgeable. Great service, reasonable pricing and excellent communication. Highly recommend for any shower/bathroom issues.", date: "Recent" },
  { name: "Katie Tilden", text: "We are thrilled with Sunny's work resealing and regrouting our main shower and en suite shower. We also took the opportunity to replace the old shower screens with frameless screens. It's been a great update. Sunny was a pleasure to deal with and clearly takes a lot of pride in his work.", date: "1 week ago" },
  { name: "Amandeep Kaur", text: "Thanks to EZ shower repair, he made bathroom looks new again, he done fantastic job, highly recommended for professional service.", date: "2 weeks ago" },
  { name: "Hudson Jefferies", text: "Sunny was very helpful and patient. He provided a range of options for us which we really needed given our budget constraints. This was extremely helpful. The work we did request was completed to a high degree and Sunny even called to follow up and make sure everything was ok.", date: "3 weeks ago" },
  { name: "Lam Sing", text: "Sunny has done a wonderful job restoring our main bathroom shower - regrouting and resealing as well as removing broken wall tiles and retiling the shower floor. A welcome update after approximately twenty years.", date: "1 month ago" },
  { name: "Neville Partridge", text: "What a great job that's what our tenants said. They could not believe how the old shower came back like new. Thanks Sunny for helping me and taking the time to go to Straddie. Well done E. Z. Shower repairs and tiling.", date: "1 month ago" },
  { name: "Stephen Ng", text: "Great service. Managed to get the job done in two days in an extremely meticulous manner. Will definitely hire again.", date: "1 month ago" },
  { name: "Dion Muller", text: "Awesome quality work, prompt and great communication. Really helped us out on a tight schedule. Couldn't be happier with the result - highly recommend!", date: "2 months ago" },
  { name: "Stephanie", text: "Had Sonny regrout our ensuite shower, affordable price, he was polite, professional and communicated every step. We had an issue however Sonny promptly rectified the issue and was always very responsive.", date: "2 months ago" },
  { name: "Su Ann Peel", text: "The scope of work included regrouting for both ensuite and main shower floors, removal and disposal of old shower screens, installation of new screens, sealant and hydro sealer application, as well as sealing the floor waste and rubbish removal.", date: "4 months ago" },
  { name: "Jacki Ferro", text: "Fabulous, timely service. Shower looks like new without cost of replacement! Mukesh investigated the problem thoroughly and explained process throughout. Very happy to recommend EZ shower repairs.", date: "4 months ago" },
  { name: "Sivaranjani Murugadass", text: "Sunny and the team did great job in fixing our leaking shower and renovation the bathroom as well, we highly recommend EZ Shower team for tiling project.", date: "5 months ago" },
  { name: "Lauren Manuel", text: "Excellent experience dealing with Sunny. He gave us a truly honest appraisal of our bathroom situation and realistic options (not the usual line from other waterproofers which is - whole new bathroom $$$$$). He regrouted/resealed two leaky showers.", date: "6 months ago" },
  { name: "Helen Cooper", text: "Good advice provided and a good outcome for regrouting and resealing shower recess - leak is now sealed. Service was prompt, efficient and neat. Sunny was helpful, respectful and courteous.", date: "6 months ago" },
  { name: "Stephanie W.", text: "Sunny has done a wonderful job solving my waterproofing problem in my apartment. Professional and completed on time. Highly recommend him. I know I'll ask Sunny's help again for my future bathroom problems. Thanks Sunny for your good work.", date: "6 months ago" },
  { name: "Mark Markonda", text: "Sunny has done an incredible job with my bathroom leakage problem with waterproofing and tile replacement. He did exactly as he promised in time with a very reasonable and fair quote. He's very professional and from start to finish everything was done perfectly. We are very happy customers and highly recommend.", date: "7 months ago" },
  { name: "Timothy Middlemiss", text: "We highly recommend EZ Shower Repairs. Sunny is highly skilled at repairing showers and bathrooms and we have been extremely happy with the work he has done for us. We would highly recommend EZ shower Repairs to anyone.", date: "7 months ago" },
  { name: "Selbie Tower", text: "Sunny has just completed a fabulous job of retiling our bathroom including replacing half the floor and all new waterproofing. Professional, efficient, interactive with us and delivered when and how he promised. We are very happy customers and recommend him.", date: "8 months ago" },
  { name: "Grey Wolf", text: "We have recently engaged Mukesh (aka Sunny) from EZ Shower Repair and Tiling to regrout and replace the floor waste in our Ensuite shower. We are very pleased with the result. We found Mukesh to be courteous, timely and carried out the work satisfactorily. We therefore highly recommend EZ Shower Repair and Tiling.", date: "10 months ago" },
  { name: "Dev Padda", text: "Absolutely fantastic work! The team was professional, punctual, and paid great attention to detail. Our floors look amazing. Highly recommend for any tiling needs!", date: "10 months ago" },
  { name: "Cameron Urquhart", text: "After receiving a number of quotes (expensive) from larger companies who wanted to rebuild the bathrooms, the quote from Sunny was very reasonable & realistic - no over quoting. The work done was outstanding and both showers look amazing.", date: "11 months ago" },
  { name: "Nate Y", text: "Sunny was very easy to deal with. Good communication and clearly identified what needed to be fixed. Received other quotes from a bigger company that just wanted to gut the entire bathroom to milk you with a big bill.", date: "11 months ago" },
  { name: "Bill Kernahan", text: "A great job. Sunny did an extensive outdoor balcony repair and waterproofing project. He was on time each day and left the site clean and safe. The agreed price was reasonable. I would recommend EZ Shower Repair and Tiling to anyone.", date: "11 months ago" },
  { name: "Tracy Bergan", text: "I needed my shower repaired quickly, when I contacted Sunny, who was extremely helpful he quoted the job, and was also able to complete the work quickly. I would highly recommend Ezishower for your bathroom renovations.", date: "11 months ago" },
  { name: "Geoff Wong", text: "I put a hole in my bathroom wall while attempting a DIY project. 24 hours later, Mukesh fixed the issue with a reasonable, practical and affordable solution. He was responsive and worked professionally and efficiently to restore my bathroom.", date: "11 months ago" },
  { name: "Tushar Chandel", text: "Had an amazing experience with EZ Shower Repair & Tiling! From start to finish, the service was top-notch. Sunny did an incredible job — super professional, skilled, and efficient. He made sure everything was done to perfection.", date: "1 year ago" },
  { name: "Tracey Donkin", text: "Sunny did an amazing job at fixing our shower leak!! We can't thank him enough and we will be recommending him to any of our friends, should they require help with their bathrooms. Thanks a million, Sunny!!", date: "1 year ago" },
  { name: "Ranita Lal", text: "Excellent service! Sunny was quick to return my calls, excellent communication and his pricing was very reasonable. He did an amazing and very professional job. I highly recommend EZ Shower Repair and Tiling.", date: "1 year ago" },
  { name: "Michael", text: "Sunny provided great service and workmanship, responded quickly to our request, inspected the requirements personally, provided a timely and value for money quotation and completed all works to our satisfaction. We highly recommend.", date: "1 year ago" },
  { name: "L", text: "I wish to thank Sunny for a great job. I had got several quotes from several big well known companies who wanted to totally rebuild my shower and charge a fortune. Sunny fixed it at a fraction of the cost.", date: "1 year ago" },
  { name: "Sai Kiran", text: "Highly Recommend! I had a fantastic experience with EZ Shower Repair and Tiling. The team was professional and delivered outstanding results.", date: "1 year ago" },
  { name: "Kashish Kalra", text: "Outstanding Service & Quality! I had a fantastic experience with EZ Shower Repair and Tiling from the initial consultation to the final result.", date: "1 year ago" },
  { name: "Ripple Deep Kaur", text: "Highly Recommend EZ Shower Repair and Tiling! EZ Shower Repair and Tiling exceeded my expectations! From start to finish, they delivered exceptional service.", date: "1 year ago" },
  { name: "E B", text: "We are very happy with the quality of work and pricing. Sunny was very helpful giving us lots of input when we have issue with our shower floor tile. Job done on time and very tidy. Thank you Sunny.", date: "1 year ago" },
  { name: "Yu-chi Chen", text: "The job is detail and effective. The price is fair. Also Sunny only recommended what you need to do. Do not ask you spend the money you do not have to spend. I am more a cost effective person. Before I choose him I compare different companies.", date: "1 year ago" },
  { name: "Prabhjit Panesar", text: "Sunny is very professional, reasonable and reliable. While other companies want to demolish whole shower, Sunny from EZ shower repair and tiling found and fixed issue with very reasonable price. Definitely refer to anyone.", date: "1 year ago" },
  { name: "Vincenza Silberschmidt", text: "Very professional, excellent communication and speedy service. Cannot recommend highly enough!!! So happy I found EZ shower repair and tiling.", date: "1 year ago" },
  { name: "Manav Chawla", text: "Excellent service! Professional, on time, and high-quality work. Our shower and tiles look amazing. Highly recommend!", date: "1 year ago" },
  { name: "Anu Bassi Ghai", text: "Highly recommended EZ Shower Repair and tiling. Prompt professional service great product supplied and fitted. Very happy with the result. Great person Sunny.", date: "1 year ago" },
  { name: "Matt", text: "Excellent service all round. Sunny was quick to respond to my enquiry and book in a time to assess my shower.", date: "1 year ago" },
  { name: "Robert Patterson", text: "Immaculate job replacing a damaged soap dish tile at a very reasonable price.", date: "1 year ago" },
  { name: "Jatin Ghai", text: "Highly recommended these guys. Very professional with their work did a great job at my place.", date: "1 year ago" },
  { name: "Kevin Faxt", text: "Great job done, very reliable. Happy with them from start to finish.", date: "1 year ago" },
  { name: "Steve Latimore", text: "Great workmanship, reliable and prompt. Very friendly, well priced. Would use again.", date: "1 year ago" },
  { name: "Maxine Atkins", text: "Sunny is very skilled at repairing showers. His dedication to his trade is admirable and he just gets in and does it. My job was a little tricky and it was done in no time at all.", date: "From Google" },
];

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const palette = [
    "bg-ocean-500", "bg-ocean-600", "bg-ocean-700",
    "bg-navy-700", "bg-navy-800", "bg-navy-900",
  ];
  const color = palette[name.charCodeAt(0) % palette.length];
  return (
    <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full ${color} text-sm font-bold text-white`}>
      {initials}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-950 px-4 pb-12 pt-14 sm:px-6 lg:pb-14 lg:pt-16">
        <div className="container-tight max-w-3xl text-center">
          <span className="inline-block font-heading text-sm font-semibold uppercase tracking-wider text-ocean-400">
            Testimonials
          </span>
          <h1 className="mt-2 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            What Our Customers Say
          </h1>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-bold text-white">5.0</span>
            <span className="text-navy-400">from 40+ Google Reviews</span>
          </div>
          <p className="mt-4 text-lg leading-relaxed text-navy-300">
            Real reviews from real customers across Gold Coast, Brisbane &
            Brisbane South. We let our work speak for itself.
          </p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="mb-5 break-inside-avoid rounded-2xl border border-navy-100 bg-white p-6"
              >
                {/* Stars + Google */}
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed text-slate-600">
                  &ldquo;{r.text}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="mt-4 flex items-center gap-3 border-t border-navy-50 pt-4">
                  <Avatar name={r.name} />
                  <div>
                    <p className="text-sm font-semibold text-navy-900">{r.name}</p>
                    <p className="text-xs text-slate-400">{r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
