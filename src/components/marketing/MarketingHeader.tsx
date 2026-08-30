// src/components/marketing/MarketingHeader.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function MarketingHeader() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-sand-border bg-warm-ivory/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bridge text-lg font-bold text-charcoal"
            onClick={closeMenu}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-control border border-charcoal text-xs">
              N
            </span>
            NestMate
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-base text-charcoal/70 transition-colors hover:text-charcoal"
            >
              Features
            </a>
            <a
              href="#story"
              className="text-base text-charcoal/70 transition-colors hover:text-charcoal"
            >
              How it works
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Button
              href="/sign-in"
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Log in
            </Button>
            <Button href="/sign-up" size="sm">
              Sign up
            </Button>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-control border border-sand-border text-charcoal transition-colors hover:bg-soft-sand/40 md:hidden"
              aria-label="Open menu"
            >
              <Menu size={18} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile bottom sheet */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-charcoal/30 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Sheet */}
          <div className="absolute inset-x-0 bottom-0 rounded-t-2xl border-t border-sand-border bg-warm-ivory px-6 pb-10 pt-5 shadow-xl">
            {/* Handle + close */}
            <div className="mb-6 flex items-center justify-between">
              <div className="mx-auto h-1 w-10 rounded-full bg-charcoal/15" />
              <button
                type="button"
                onClick={closeMenu}
                className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-charcoal/70 transition-colors hover:bg-soft-sand/50 hover:text-charcoal"
                aria-label="Close menu"
              >
                <X size={18} strokeWidth={1.75} />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              <a
                href="#features"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3.5 text-[15.5px] font-medium text-charcoal transition-colors hover:bg-soft-sand/40"
              >
                Features
              </a>
              <a
                href="#story"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3.5 text-[15.5px] font-medium text-charcoal transition-colors hover:bg-soft-sand/40"
              >
                How it works
              </a>
            </nav>

            <div className="mt-6 flex flex-col gap-3 border-t border-sand-border pt-6">
              <Button href="/sign-in" variant="secondary" className="w-full">
                Log in
              </Button>
              <Button href="/sign-up" className="w-full">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}