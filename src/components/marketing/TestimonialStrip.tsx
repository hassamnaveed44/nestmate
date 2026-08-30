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
        x: reduceMotion ? 0 : 40,
        duration: 0.8,
        stagger: 0.15,
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
        <div className="mb-12 max-w-xl">
          <h2 className="mb-3 font-serif text-[32px] leading-[40px] text-charcoal md:text-[36px] md:leading-[44px]">
            Households already living lighter.
          </h2>
          <p className="text-base text-charcoal/70">
            Real situations, the kind NestMate was actually designed
            around.
          </p>
        </div>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="group w-[85%] shrink-0 snap-start rounded-card border border-sand-border bg-soft-sand/20 p-8 transition-transform duration-300 ease-out hover:-translate-y-1 sm:w-[70%] md:w-[calc(33.333%-16px)]"
            >
              <Quote
                size={28}
                className="mb-6 text-charcoal/20"
                strokeWidth={1.5}
              />
              <blockquote className="mb-8 min-h-[96px] text-base leading-relaxed text-charcoal/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-medium text-charcoal ${
                    t.accent === "olive"
                      ? "bg-muted-olive/25"
                      : "bg-soft-sand"
                  }`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bridge text-sm text-charcoal">
                    {t.name}
                  </p>
                  <p className="text-xs text-charcoal/60">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}