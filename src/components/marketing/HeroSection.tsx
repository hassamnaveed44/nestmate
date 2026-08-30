
// src/components/marketing/HeroSection.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { Home, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealStagger } from "@/components/motion/RevealStagger";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      gsap.from(imageWrapRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 1.25,
        ease: "power4.out",
      });

      gsap.to(imageWrapRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[88vh] w-full items-center justify-center overflow-hidden border-b border-sand-border"
    >
      {/* Background image */}
      <div
        ref={imageWrapRef}
        className="absolute inset-0 h-[112%] w-full will-change-transform"
      >
        <Image
          src="/images/nesthero1.jpg"
          alt="A warm, sunlit living room shared by roommates"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Main gradient for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-ivory/25 via-warm-ivory/65 to-warm-ivory/92" />

      {/* Soft vignette behind content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,241,232,0.55)_0%,_transparent_70%)]" />

      {/* Content */}
      <RevealStagger
        delay={0.25}
        className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-5 pt-16 text-center md:px-8 md:pt-20"
      >
        {/* Badge */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sand-border bg-soft-sand/70 px-4 py-1.5 backdrop-blur-sm">
          <Home
            size={15}
            className="text-charcoal/70"
            strokeWidth={1.75}
          />

          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-charcoal/75">
            For modern households
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-5 font-serif text-[42px] leading-[1.12] tracking-tight text-charcoal md:text-[56px] md:leading-[1.1]">
          Shared living, zero friction
        </h1>

        {/* Supporting text */}
        <p className="mb-9 max-w-lg text-[15.5px] leading-relaxed text-charcoal/80 md:text-base">
          Replace scattered spreadsheets, awkward conversations, and
          passive-aggressive notes with one calm, unified space for
          household finances and chores.
        </p>

        {/* CTAs */}
        <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-3.5">
          <Button
            href="/sign-up"
            className="w-full min-w-[160px] sm:w-auto"
          >
            Get Started
            <ArrowRight size={17} strokeWidth={2} />
          </Button>

          <Button
            href="#features"
            variant="secondary"
            className="w-full min-w-[160px] sm:w-auto"
          >
            Explore Demo
          </Button>
        </div>
      </RevealStagger>
    </section>
  );
}
