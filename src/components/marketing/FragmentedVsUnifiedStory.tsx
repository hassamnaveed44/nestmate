// src/components/marketing/FragmentedVsUnifiedStory.tsx
"use client";

import { CheckCircle2, Wallet } from "lucide-react";
import { ScrollStory } from "@/components/motion/ScrollStory";
import { CounterTween } from "@/components/motion/CounterTween";

export function FragmentedVsUnifiedStory() {
  return (
    <section
      id="story"
      className="border-b border-sand-border bg-soft-sand/30 py-16 md:py-24"
    >
      <ScrollStory className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-5 md:grid-cols-2 md:gap-16 md:px-10">
        {/* Narrative */}
        <div data-narrative className="flex flex-col gap-5 md:pr-6">
          <h2 className="font-serif text-[32px] leading-[1.2] text-charcoal md:text-[36px]">
            From group chat chaos to quiet clarity.
          </h2>

          <p className="text-[15.5px] leading-relaxed text-charcoal/75 md:text-base">
            Managing a household shouldn&apos;t require a degree in
            accounting or a talent for diplomacy. NestMate absorbs the
            friction of shared living, turning messy chat threads and
            forgotten IOUs into one clear, equitable system.
          </p>

          <p className="text-[15.5px] leading-relaxed text-charcoal/75 md:text-base">
            It&apos;s less about tracking every penny, and more about
            preserving the peace of your home.
          </p>
        </div>

        {/* Visual */}
        <div
          data-visual
          className="relative flex h-[340px] items-center justify-center overflow-hidden md:h-[400px] md:justify-end"
        >
          {/* Floating “messy chat” cards */}
          <div className="absolute left-1 top-5 w-40 rotate-[-7deg] rounded-card border border-sand-border bg-warm-ivory/90 p-3.5 opacity-60 shadow-sm md:left-0 md:w-44">
            <div className="mb-2 h-2 w-24 rounded-full bg-sand-border" />
            <div className="h-2 w-16 rounded-full bg-sand-border/80" />
          </div>

          <div className="absolute bottom-2 right-0 w-36 rotate-[6deg] rounded-card border border-sand-border bg-warm-ivory/90 p-3.5 opacity-60 shadow-sm md:right-2 md:w-40">
            <div className="mb-2 h-2 w-20 rounded-full bg-sand-border" />
            <div className="mb-2 h-2 w-12 rounded-full bg-sand-border/80" />
            <div className="h-2 w-16 rounded-full bg-sand-border/70" />
          </div>

          {/* Premium Balance Card */}
          <div className="relative z-10 w-[280px] rounded-card border border-sand-border bg-warm-ivory p-5 shadow-[0_12px_40px_-12px_rgba(23,23,20,0.15)] md:w-72">
            <div className="mb-4 flex items-center justify-between border-b border-sand-border pb-3">
              <span className="font-bridge text-[15px] text-charcoal">
                Monthly Balance
              </span>
              <CheckCircle2
                size={18}
                className="text-muted-olive"
                strokeWidth={1.75}
              />
            </div>

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-soft-sand/60">
                <Wallet size={18} className="text-charcoal" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-charcoal/55">
                  You owe
                </p>
                <p className="font-bridge text-2xl tracking-tight text-charcoal">
                  <CounterTween value={0} />
                </p>
              </div>
            </div>

            <div className="rounded-control border border-sand-border bg-soft-sand/25 px-3 py-2.5 text-center">
              <span className="text-sm text-charcoal/70">
                All settled up for this month.
              </span>
            </div>
          </div>
        </div>
      </ScrollStory>
    </section>
  );
}