"use client";

import { SignOutButton } from "@clerk/nextjs";
import { CreateHouseholdForm } from "./CreateHouseholdForm";
import { JoinHouseholdForm } from "./JoinHouseholdForm";

interface HouseholdEntryScreenProps {
  initialCode?: string;
}

export function HouseholdEntryScreen({ initialCode }: HouseholdEntryScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-warm-ivory px-5 py-16 md:px-10">
      <main className="flex w-full max-w-[1000px] flex-col items-center gap-12 md:gap-16">
        <div className="text-center">
          <h1 className="mb-2.5 font-serif text-[32px] leading-[1.2] text-charcoal md:text-[40px]">
            Welcome to NestMate
          </h1>
          <p className="text-base text-charcoal/65">
            Set up your space or join an existing one.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          <CreateHouseholdForm />
          <JoinHouseholdForm initialCode={initialCode} />
        </div>

        <SignOutButton>
          <button className="text-sm text-charcoal/60 underline-offset-4 transition-colors hover:text-charcoal hover:underline">
            Log out
          </button>
        </SignOutButton>
      </main>
    </div>
  );
}