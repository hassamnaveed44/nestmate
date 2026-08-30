// src/components/marketing/MarketingFooter.tsx
import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="w-full border-t border-sand-border bg-warm-ivory py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-5 md:flex-row md:items-center md:justify-between md:gap-0 md:px-10">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Link
            href="/"
            className="flex items-center gap-2 font-bridge text-lg font-bold text-charcoal"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-control border border-charcoal text-xs">
              N
            </span>
            NestMate
          </Link>
          <p className="text-sm text-charcoal/60">
            © 2026 NestMate Household Solutions
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/privacy"
            className="text-sm text-charcoal/70 transition-colors hover:text-charcoal"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-charcoal/70 transition-colors hover:text-charcoal"
          >
            Terms of Service
          </Link>
          <Link
            href="/contact"
            className="text-sm text-charcoal/70 transition-colors hover:text-charcoal"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}