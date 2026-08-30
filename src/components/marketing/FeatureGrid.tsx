// src/components/marketing/FeatureGrid.tsx
"use client";

import { FileText, Receipt, RefreshCw, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CounterTween } from "@/components/motion/CounterTween";

const bars = [22, 38, 68, 48, 88, 32, 58];

export function FeatureGrid() {
  return (
    <section id="features" className="bg-warm-ivory py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        {/* Section header */}
        <div className="mb-14 text-center md:mb-16">
          <h2 className="mb-3 font-serif text-[32px] leading-[1.2] text-charcoal md:text-[36px]">
            Everything in its right place.
          </h2>
          <p className="mx-auto max-w-xl text-base text-charcoal/70">
            Tools designed to feel like a natural extension of your home
            life, not a corporate mandate.
          </p>
        </div>

        <ScrollReveal className="grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[minmax(240px,auto)] md:gap-6">
          {/* Large Expense Tracking card */}
          <div className="group flex flex-col justify-between rounded-card border border-sand-border bg-soft-sand/25 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-charcoal/25 hover:shadow-[0_8px_30px_-12px_rgba(23,23,20,0.12)] md:col-span-2 md:p-8">
            <div className="mb-8 flex items-start justify-between gap-5">
              <div className="max-w-md">
                <h3 className="mb-2 font-bridge text-lg text-charcoal md:text-xl">
                  Seamless Expense Tracking
                </h3>
                <p className="text-[15px] leading-relaxed text-charcoal/70">
                  Log groceries, rent, and utilities in seconds. NestMate
                  splits it automatically based on your household&apos;s
                  agreed rules.
                </p>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sand-border bg-warm-ivory">
                <Receipt size={18} className="text-charcoal" strokeWidth={1.75} />
              </div>
            </div>

            {/* Refined bar chart */}
            <div className="flex h-24 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="w-full rounded-t-md bg-muted-olive/65 transition-all duration-500 group-hover:bg-muted-olive/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Tall Settlement card */}
          <div className="group flex flex-col rounded-card border border-sand-border bg-soft-sand/30 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-charcoal/25 hover:shadow-[0_8px_30px_-12px_rgba(23,23,20,0.12)] md:row-span-2 md:p-8">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-sand-border bg-warm-ivory">
              <RefreshCw size={18} className="text-charcoal" strokeWidth={1.75} />
            </div>

            <h3 className="mb-2 font-bridge text-lg text-charcoal md:text-xl">
              Frictionless Settlements
            </h3>
            <p className="mb-8 text-[15px] leading-relaxed text-charcoal/70">
              Settle up with one clear transfer at the end of the month. No
              more chasing people for money.
            </p>

            {/* Premium settlement mock */}
            <div className="mt-auto rounded-control border border-sand-border bg-warm-ivory p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between border-b border-sand-border pb-3">
                <span className="text-[11px] font-medium uppercase tracking-wider text-charcoal/55">
                  Pay Alex
                </span>
                <span className="font-bridge text-lg text-charcoal">
                  <CounterTween value={42.5} />
                </span>
              </div>
              <button
                tabIndex={-1}
                aria-hidden="true"
                className="w-full rounded-button bg-charcoal py-2.5 text-sm font-medium text-warm-ivory transition-opacity hover:opacity-90"
              >
                Settle Balance
              </button>
            </div>
          </div>

          {/* Chores card */}
          <div className="group flex flex-col justify-between rounded-card border border-sand-border bg-soft-sand/25 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-charcoal/25 hover:shadow-[0_8px_30px_-12px_rgba(23,23,20,0.12)] md:p-8">
            <div>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-sand-border bg-warm-ivory">
                <Sparkles size={18} className="text-charcoal" strokeWidth={1.75} />
              </div>
              <h3 className="mb-2 font-bridge text-lg text-charcoal md:text-xl">
                Equitable Chores
              </h3>
              <p className="text-[15px] leading-relaxed text-charcoal/70">
                Duties rotate fairly on a set schedule, so no one becomes the
                default house manager.
              </p>
            </div>
          </div>

          {/* Shared Agreements card */}
          <div className="group flex flex-col justify-between rounded-card border border-sand-border bg-soft-sand/30 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-charcoal/25 hover:shadow-[0_8px_30px_-12px_rgba(23,23,20,0.12)] md:p-8">
            <div>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-sand-border bg-warm-ivory">
                <FileText size={18} className="text-charcoal" strokeWidth={1.75} />
              </div>
              <h3 className="mb-2 font-bridge text-lg text-charcoal md:text-xl">
                Shared Agreements
              </h3>
              <p className="text-[15px] leading-relaxed text-charcoal/70">
                One place for house guidelines, Wi-Fi passwords, and
                landlord contacts everyone can refer back to.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}