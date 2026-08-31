"use client";

import { UserButton } from "@clerk/nextjs";
import { CreateHouseholdForm } from "./CreateHouseholdForm";
import { JoinHouseholdForm } from "./JoinHouseholdForm";

interface HouseholdEntryScreenProps {
  initialCode?: string;
}

export function HouseholdEntryScreen({ initialCode }: HouseholdEntryScreenProps) {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-warm-ivory text-charcoal">
      {/* Top Header */}
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6 sm:px-8">
        <div className="flex items-center gap-2">
          <span className="font-serif text-2xl font-normal tracking-tight text-charcoal">
            NestMate
          </span>
          <span className="rounded-md border border-sand-border bg-soft-sand/50 px-2 py-0.5 text-[11px] font-medium tracking-wide text-charcoal/70">
            Workspace
          </span>
        </div>
        <div className="flex items-center gap-3">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-8 h-8 rounded-full border border-sand-border ring-2 ring-warm-ivory",
              },
            }}
          />
        </div>
      </header>

      {/* Main Choice Section */}
      <main className="mx-auto my-auto flex w-full max-w-4xl flex-col items-center px-6 py-8 sm:px-8">
        <div className="mb-10 text-center md:mb-12">
          <h1 className="font-serif text-4xl font-normal tracking-tight text-charcoal sm:text-5xl">
            Welcome to NestMate
          </h1>
          <p className="mt-3 text-sm text-charcoal/70 sm:text-base">
            Set up a new space for your shared home or join an existing household.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8">
          <CreateHouseholdForm />
          <JoinHouseholdForm initialCode={initialCode} />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-charcoal/50">
        NestMate · Shared living, simplified.
      </footer>
    </div>
  );
}