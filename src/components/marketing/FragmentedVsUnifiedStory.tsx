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
      <ScrollStory className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-5 md:grid-cols-2 md:px-10">
        <div data-narrative className="flex flex-col gap-6 md:pr-8">
          <h2 className="font-serif text-[32px] leading-[40px] text-charcoal md:text-[36px] md:leading-[44px]">
            From group chat chaos to quiet clarity.
          </h2>
          <p className="text-base text-charcoal/70">
            Managing a household shouldn&apos;t require a degree in
            accounting or a talent for diplomacy. NestMate absorbs the
            friction of shared living, turning messy chat threads and
            forgotten IOUs into one clear, equitable system.
          </p>
          <p className="text-base text-charcoal/70">
            It&apos;s less about tracking every penny, and more about
            preserving the peace of your home.
          </p>
        </div>

        <div
          data-visual
          className="relative flex h-[360px] items-center justify-center overflow-hidden md:h-[400px] md:justify-end"
        >
          <div className="absolute left-2 top-6 w-40 rotate-[-6deg] rounded-card border border-sand-border bg-warm-ivory p-4 opacity-70 shadow-sm md:left-0 md:w-48">
            <div className="mb-2 h-2 w-24 rounded-control bg-sand-border" />
            <div className="h-2 w-16 rounded-control bg-sand-border" />
          </div>

          <div className="absolute bottom-0 right-2 w-36 rotate-[6deg] rounded-card border border-sand-border bg-warm-ivory p-4 opacity-70 shadow-sm md:right-4 md:w-40">
            <div className="mb-2 h-2 w-20 rounded-control bg-sand-border" />
            <div className="mb-2 h-2 w-12 rounded-control bg-sand-border" />
            <div className="h-2 w-16 rounded-control bg-sand-border" />
          </div>

          <div className="relative z-10 w-72 rounded-card border border-sand-border bg-warm-ivory p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between border-b border-sand-border pb-3">
              <span className="font-bridge text-lg text-charcoal">
                Monthly Balance
              </span>
              <CheckCircle2 size={20} className="text-muted-olive" />
            </div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-soft-sand/50">
                <Wallet size={20} className="text-charcoal" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-charcoal/60">
                  You owe
                </p>
                <p className="font-bridge text-2xl text-charcoal">
                  <CounterTween value={0} />
                </p>
              </div>
            </div>
            <div className="rounded-control border border-sand-border bg-soft-sand/20 p-2 text-center">
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