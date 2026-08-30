import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-sand-border bg-warm-ivory/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 font-bridge text-lg font-bold text-charcoal"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-control border border-charcoal text-xs">
            N
          </span>
          NestMate
        </Link>

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
        </div>
      </div>
    </header>
  );
}