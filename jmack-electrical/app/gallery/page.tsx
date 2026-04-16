import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description: "See J Mack Electrical's work across Gympie — residential, commercial, industrial and rural projects.",
};

const categories = ["All", "Residential", "Commercial", "Rural", "Team"];

const photos = [
  {
    src: "/images/team-trucks.jpg",
    alt: "J Mack Electrical team and work trucks — Gympie",
    category: "Team",
    caption: "The J Mack team with our fully equipped service vehicles",
  },
  {
    src: "/images/job-lighting.webp",
    alt: "Pendant lighting installation in modern kitchen — Gympie",
    category: "Residential",
    caption: "Pendant lighting install — modern kitchen, Gympie region",
  },
  {
    src: "/images/truck.webp",
    alt: "J Mack Electrical service vehicle — Toyota HiLux",
    category: "Team",
    caption: "Our fully stocked service vehicle — ready for any job",
  },
  {
    src: "/images/jim.jpg",
    alt: "Jim Mackenzie — Owner, J Mack Electrical Services",
    category: "Team",
    caption: "Jim Mackenzie — founder and master electrician",
  },
  {
    src: "/images/dylan.jpg",
    alt: "Dylan — Qualified Electrician, J Mack Electrical",
    category: "Team",
    caption: "Dylan — part of the J Mack qualified team",
  },
  {
    src: "/images/newspaper.jpg",
    alt: "JMack's Decade of Care — featured in Gympie Today",
    category: "Commercial",
    caption: "Featured in Gympie Today: JMack's Decade of Care",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-brand-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 to-brand-800/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-brand-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Gallery</span>
          </div>
          <h1 className="font-heading text-5xl font-extrabold text-white mb-4">Our Work</h1>
          <p className="text-white/60 text-lg max-w-xl">
            A look at the projects, team and completed jobs across Gympie and surrounding areas.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Note */}
          <div className="mb-10 bg-brand-50 border border-brand-100 rounded-2xl p-5 flex gap-4 items-start">
            <span className="text-2xl">📸</span>
            <div>
              <p className="font-semibold text-brand-900 text-sm">More photos coming soon</p>
              <p className="text-gray-500 text-sm mt-0.5">
                We&apos;re always adding new project photos. Follow us on{" "}
                <a href="https://www.instagram.com/jmackelectricalservices" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Instagram</a>{" "}
                or{" "}
                <a href="https://www.facebook.com/JMackElectrical/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Facebook</a>{" "}
                to see our latest work.
              </p>
            </div>
          </div>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {photos.map((photo, i) => (
              <div key={i} className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div>
                    <span className="text-xs text-brand-300 uppercase tracking-wider font-semibold">{photo.category}</span>
                    <p className="text-white text-sm font-medium mt-1">{photo.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social follow strip */}
          <div className="mt-16 bg-brand-950 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 circuit-bg opacity-30" />
            <div className="relative">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                Follow Our Work
              </h3>
              <p className="text-white/60 mb-8 max-w-md mx-auto text-sm">
                See our latest jobs, team updates and more on social media.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.instagram.com/jmackelectricalservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @jmackelectricalservices
                </a>
                <a
                  href="https://www.facebook.com/JMackElectrical/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1877F2] text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  JMack Electrical
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
