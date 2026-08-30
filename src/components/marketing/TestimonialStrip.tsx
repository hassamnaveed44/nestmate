// src/components/marketing/TestimonialStrip.tsx
"use client";

import { useRef } from "react";
import { Quote } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent: "sand" | "olive";
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I used to chase people for the electricity bill every month. Now I just check the dashboard and it tells me exactly who owes what.",
    name: "Ayesha",
    role: "Shares a flat near LUMS",
    initials: "AY",
    accent: "sand",
  },
  {
    quote:
      "Splitwise never handled our rent or chores properly. NestMate finally feels like it was built for how we actually live, not a one-off trip.",
    name: "Bilal",
    role: "Shares a flat in Islamabad",
    initials: "BL",
    accent: "olive",
  },
  {
    quote:
      "I was the one everyone leaned on to remember who paid for what. Now that role is just... the app's job. It's a relief.",
    name: "Sara",
    role: "Household organiser, 3 roommates",
    initials: "SR",
    accent: "sand",
  },
];

export function TestimonialStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = trackRef.current?.children;
      if (!cards?.length) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      gsap.from(cards, {
        opacity: 0,
        x: reduceMotion ? 0 : 36,
        duration: 0.85,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="border-b border-sand-border bg-warm-ivory py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        {/* Section header */}
        <div className="mb-12 max-w-xl">
          <h2 className="mb-3 font-serif text-[32px] leading-[1.2] text-charcoal md:text-[36px]">
            Households already living lighter.
          </h2>
          <p className="text-base text-charcoal/70">
            Real situations, the kind NestMate was actually designed around.
          </p>
        </div>

        {/* Cards track */}
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-6 [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="group w-[85%] shrink-0 snap-start rounded-card border border-sand-border bg-soft-sand/20 p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-charcoal/20 hover:shadow-[0_10px_30px_-12px_rgba(23,23,20,0.1)] sm:w-[70%] md:w-[calc(33.333%-16px)] md:p-8"
            >
              <Quote
                size={26}
                className="mb-5 text-charcoal/15"
                strokeWidth={1.5}
              />

              <blockquote className="mb-7 min-h-[100px] text-[15.5px] leading-relaxed text-charcoal/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium text-charcoal ${
                    t.accent === "olive"
                      ? "bg-muted-olive/20"
                      : "bg-soft-sand"
                  }`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bridge text-sm text-charcoal">{t.name}</p>
                  <p className="text-xs text-charcoal/55">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}