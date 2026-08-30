// src/components/marketing/MarketingFooter.tsx
import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="w-full border-t border-sand-border bg-warm-ivory">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:gap-8 md:px-10 md:py-14">
        {/* Brand stack */}
        <div className="flex flex-col items-center gap-2.5 text-center md:items-start md:text-left">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bridge text-[17px] font-semibold text-charcoal transition-opacity hover:opacity-80"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-control border border-charcoal/80 text-[13px] font-medium">
              N
            </span>
            NestMate
          </Link>

          <p className="text-sm text-charcoal/60">
            Shared living, zero friction.
          </p>

          <p className="text-xs text-charcoal/40">
            © 2026 NestMate
          </p>
        </div>

        {/* Links – vertically centered on desktop */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <Link
            href="/privacy"
            className="text-[13.5px] text-charcoal/60 transition-colors hover:text-charcoal"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-[13.5px] text-charcoal/60 transition-colors hover:text-charcoal"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="text-[13.5px] text-charcoal/60 transition-colors hover:text-charcoal"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}