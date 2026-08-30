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

      // Load-in reveal: image scales down from 1.12 to 1, matches hero
      // reveal motion token (800-1200ms, power4.out)
      gsap.from(imageWrapRef.current, {
        scale: 1.12,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      // Scroll parallax: image drifts slower than the page as you scroll
      // past the hero, giving it depth without being distracting
      gsap.to(imageWrapRef.current, {
        yPercent: 12,
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
      className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden border-b border-sand-border"
    >
      <div
        ref={imageWrapRef}
        className="absolute inset-0 h-[115%] w-full will-change-transform"
      >
        <Image
          src="/images/nesthero1.jpg"
          alt="A warm, sunlit living room"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-warm-ivory/40 via-warm-ivory/60 to-warm-ivory/85" />

      <RevealStagger
        delay={0.3}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 text-center md:px-10"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-control border border-sand-border bg-soft-sand/50 px-3 py-1.5">
          <Home size={16} className="text-charcoal/70" />
          <span className="text-xs uppercase tracking-widest text-charcoal/70">
            For modern households
          </span>
        </div>

        <h1 className="mb-6 font-serif text-[40px] leading-[48px] text-charcoal md:text-[56px] md:leading-[64px]">
          Shared living, zero friction
        </h1>

        <p className="mb-8 max-w-xl text-base text-charcoal/70">
          Replace scattered spreadsheets, awkward conversations, and
          passive-aggressive notes with one calm, unified space for
          household finances and chores.
        </p>

        <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Button href="/sign-up" className="w-full sm:w-auto">
            Get Started
            <ArrowRight size={18} />
          </Button>
          <Button
            href="#features"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Explore Demo
          </Button>
        </div>
      </RevealStagger>
    </section>
  );
}