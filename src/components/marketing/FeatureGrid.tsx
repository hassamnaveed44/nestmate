// src/components/marketing/FeatureGrid.tsx
"use client";

import { FileText, Receipt, RefreshCw, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CounterTween } from "@/components/motion/CounterTween";

const bars = [20, 40, 70, 50, 90, 30, 60];

export function FeatureGrid() {
  return (
    <section id="features" className="bg-warm-ivory py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="mb-16 text-center">
          <h2 className="mb-3 font-serif text-[32px] leading-[40px] text-charcoal md:text-[36px] md:leading-[44px]">
            Everything in its right place.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-charcoal/70">
            Tools designed to feel like a natural extension of your home
            life, not a corporate mandate.
          </p>
        </div>

        <ScrollReveal className="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-[minmax(240px,auto)]">
          <div className="flex flex-col justify-between rounded-card border border-sand-border bg-soft-sand/20 p-8 transition-colors hover:border-charcoal/30 md:col-span-2">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <h3 className="mb-2 font-bridge text-lg text-charcoal md:text-xl">
                  Seamless Expense Tracking
                </h3>
                <p className="max-w-md text-base text-charcoal/70">
                  Log groceries, rent, and utilities in seconds. NestMate
                  splits it automatically based on your household&apos;s
                  agreed rules.
                </p>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sand-border bg-warm-ivory">
                <Receipt size={20} className="text-charcoal" />
              </div>
            </div>
            <div className="flex h-24 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="w-full rounded-t-lg bg-muted-olive/70"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col rounded-card border border-sand-border bg-soft-sand/30 p-8 transition-colors hover:border-charcoal/30 md:row-span-2">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-sand-border bg-warm-ivory">
              <RefreshCw size={20} className="text-charcoal" />
            </div>
            <h3 className="mb-2 font-bridge text-lg text-charcoal md:text-xl">
              Frictionless Settlements
            </h3>
            <p className="mb-8 text-base text-charcoal/70">
              Settle up with one clear transfer at the end of the month. No
              more chasing people for money.
            </p>
            <div className="mt-auto flex flex-col gap-3 rounded-control border border-sand-border bg-warm-ivory p-4">
              <div className="flex items-center justify-between border-b border-sand-border pb-2">
                <span className="text-xs uppercase tracking-wide text-charcoal/60">
                  Pay Alex
                </span>
                <span className="font-bridge text-lg text-charcoal">
                  <CounterTween value={42.5} />
                </span>
              </div>
              <button
                tabIndex={-1}
                aria-hidden="true"
                className="mt-1 rounded-button bg-charcoal py-2 text-sm text-warm-ivory"
              >
                Settle Balance
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-card border border-sand-border bg-soft-sand/20 p-8 transition-colors hover:border-charcoal/30">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-sand-border bg-warm-ivory">
                <Sparkles size={20} className="text-charcoal" />
              </div>
              <h3 className="mb-2 font-bridge text-lg text-charcoal md:text-xl">
                Equitable Chores
              </h3>
              <p className="text-base text-charcoal/70">
                Duties rotate fairly on a set schedule, so no one becomes the
                default house manager.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-card border border-sand-border bg-soft-sand/30 p-8 transition-colors hover:border-charcoal/30">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-sand-border bg-warm-ivory">
                <FileText size={20} className="text-charcoal" />
              </div>
              <h3 className="mb-2 font-bridge text-lg text-charcoal md:text-xl">
                Shared Agreements
              </h3>
              <p className="text-base text-charcoal/70">
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