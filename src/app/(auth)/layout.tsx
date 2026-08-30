import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-warm-ivory px-5 py-12">
      {/* Soft radial background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-soft-sand/50 via-warm-ivory to-warm-ivory"
      />

      <div className="relative z-10 w-full max-w-[420px]">
        {/* Brand */}
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 font-bridge text-xl font-semibold text-charcoal transition-opacity hover:opacity-80"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-control border border-charcoal text-sm font-medium">
              N
            </span>
            NestMate
          </Link>
          <p className="mt-2 text-sm text-charcoal/55">
            Shared living, zero friction.
          </p>
        </div>

        {/* Single container with page transition */}
       {children}

        <p className="mt-8 text-center text-[13px] text-charcoal/50">
          <Link href="/" className="transition-colors hover:text-charcoal">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}