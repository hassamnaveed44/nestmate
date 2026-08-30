"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted-olive/20 blur-[120px] motion-safe:animate-pulse"
      />

      <ScrollReveal
        stagger={0.12}
        className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-5 text-center md:px-10"
      >
        <span className="mb-5 text-xs uppercase tracking-widest text-warm-ivory/60">
          Ready when you are
        </span>

        <h2 className="mb-6 font-serif text-[32px] leading-[40px] text-warm-ivory md:text-[44px] md:leading-[52px]">
          Your household deserves better than a group chat.
        </h2>

        <p className="mb-10 max-w-md text-base text-warm-ivory/70">
          Set it up once. Every expense, chore, and agreement stays clear
          from day one.
        </p>

        <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Button
            href="/sign-up"
            className="w-full bg-warm-ivory text-charcoal hover:opacity-90 sm:w-auto"
          >
            Create your household
            <ArrowRight size={18} />
          </Button>
          <Button
            href="#features"
            variant="ghost"
            className="w-full text-warm-ivory hover:bg-warm-ivory/10 sm:w-auto"
          >
            See how it works
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}