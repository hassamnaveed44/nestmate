
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-medium">404</p>

        <h1 className="mt-2 text-4xl font-semibold">
          Page not found
        </h1>

        <p className="mt-4 text-muted-foreground">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-md border px-4 py-2 text-sm"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}

