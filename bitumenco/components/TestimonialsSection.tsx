"use client";

import { Star, MessageSquareQuote } from "lucide-react";

const testimonials = [
  {
    name: "Mark H.",
    location: "Samford, Brisbane",
    rating: 5,
    text: "Jack and his team did a brilliant job on our driveway. They were on time, professional, and the finished result looks fantastic. Highly recommend Bitumen Co to anyone needing asphalt work done.",
    service: "Asphalt Driveway",
  },
  {
    name: "Sarah & Tom W.",
    location: "Gold Coast",
    rating: 5,
    text: "We had our old cracked driveway resurfaced and the difference is incredible. The crew was respectful of our property and cleaned up everything. Great value for money.",
    service: "Driveway Resurfacing",
  },
  {
    name: "David L.",
    location: "Sunshine Coast",
    rating: 5,
    text: "Used Bitumen Co for our commercial car park. The line marking is perfect, and the asphalt work was completed ahead of schedule. Will definitely use them again for our other properties.",
    service: "Commercial Car Park",
  },
  {
    name: "Greg P.",
    location: "Morayfield",
    rating: 5,
    text: "Had a few potholes in our warehouse car park that were becoming a safety hazard. Jack's team patched them up in a few hours — good as new. Quick and affordable.",
    service: "Pothole Repairs",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-dark py-20 sm:py-28">
      <div className="container-tight px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
            Client Reviews
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-asphalt-400">
            We take pride in delivering quality work and building lasting
            relationships with every client.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-white/5 bg-asphalt-900/50 p-8"
            >
              {/* Quote icon */}
              <MessageSquareQuote className="absolute right-6 top-6 h-8 w-8 text-amber-500/10" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="mb-6 text-base leading-relaxed text-asphalt-200">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-asphalt-500">{t.location}</p>
                </div>
                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
