"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DoorOpen, ArrowRight } from "lucide-react";

interface JoinHouseholdFormProps {
  initialCode?: string;
}

export function JoinHouseholdForm({ initialCode = "" }: JoinHouseholdFormProps) {
  const router = useRouter();
  const [code, setCode] = useState(initialCode);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const trimmed = code.trim().toUpperCase();
    if (trimmed.length < 6) {
      setError("Enter the full invite code.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/households/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inviteCode: trimmed }),
      });
      const json = await res.json();

      if (!res.ok || !json.success) {
        setError(json?.error?.message ?? "That code didn't work. Double-check it and try again.");
        setLoading(false);
        return;
      }

      router.push(`/${json.data.household.id}`);
    } catch {
      setError("Something went wrong. Check your connection and try again.");
      setLoading(false);
    }
  }

  return (
    <div className="flex h-full flex-col justify-between rounded-card border border-sand-border bg-soft-sand/35 p-7 transition-colors duration-200 hover:border-charcoal/20 md:p-8">
      <div>
        <div className="mb-4 flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-border bg-warm-ivory">
            <DoorOpen size={16} className="text-charcoal" strokeWidth={1.75} />
          </div>
          <h2 className="font-bridge text-lg text-charcoal md:text-xl">
            Join a household
          </h2>
        </div>

        <p className="mb-7 text-[15px] leading-relaxed text-charcoal/70">
          Already have mates set up? Enter your invite code to get started.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label
            htmlFor="invite-code"
            className="text-sm font-medium text-charcoal/80"
          >
            Invite Code
          </label>
          <input
            id="invite-code"
            name="invite-code"
            type="text"
            placeholder="Enter 6-digit code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              if (error) setError(null);
            }}
            maxLength={12}
            className="h-11 rounded-xl border border-sand-border bg-warm-ivory px-3.5 text-[15px] uppercase tracking-widest text-charcoal placeholder:text-charcoal/40 placeholder:tracking-normal placeholder:normal-case focus:border-charcoal focus:outline-none focus:ring-1 focus:ring-charcoal/15"
          />
          {error && (
            <p className="mt-1 text-xs text-terracotta">{error}</p>
          )}
        </form>
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        disabled={loading}
        className="mt-7 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-charcoal text-sm font-medium text-warm-ivory transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-warm-ivory/40 border-t-warm-ivory" />
        ) : (
          <>
            Join Household
            <ArrowRight size={16} strokeWidth={2} />
          </>
        )}
      </button>
    </div>
  );
}