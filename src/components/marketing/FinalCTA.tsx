// src/components/marketing/FinalCTA.tsx
"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 md:py-28">
      {/* Soft ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted-olive/25 blur-[140px]"
      />

      {/* Subtle top edge line for separation */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm-ivory/15 to-transparent"
      />

      <ScrollReveal
        stagger={0.1}
        className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-5 text-center md:px-10"
      >
        <span className="mb-5 rounded-full border border-warm-ivory/15 bg-warm-ivory/5 px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-warm-ivory/70">
          Ready when you are
        </span>

        <h2 className="mb-5 font-serif text-[32px] leading-[1.2] text-warm-ivory md:text-[42px] md:leading-[1.15]">
          Your household deserves better than a group chat.
        </h2>

        <p className="mb-10 max-w-md text-[15.5px] leading-relaxed text-warm-ivory/65">
          Set it up once. Every expense, chore, and agreement stays clear
          from day one — no more chasing, no more spreadsheets.
        </p>

        <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Button
            href="/sign-up"
            className="w-full bg-warm-ivory text-charcoal hover:bg-warm-ivory/90 sm:w-auto"
          >
            Create your household
            <ArrowRight size={17} strokeWidth={2} />
          </Button>

          <Button
            href="#features"
            variant="ghost"
            className="w-full border border-warm-ivory/20 text-warm-ivory hover:bg-warm-ivory/10 sm:w-auto"
          >
            See how it works
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}