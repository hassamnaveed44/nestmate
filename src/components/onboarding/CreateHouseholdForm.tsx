"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Home, ArrowRight } from "lucide-react";

export function CreateHouseholdForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const trimmed = name.trim();
    if (trimmed.length < 2) {
      setError("Give your household a name (at least 2 characters).");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/households", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmed }),
      });
      const json = await res.json();

      if (!res.ok || !json.success) {
        setError(json?.error?.message ?? "Couldn't create the household. Try again.");
        setLoading(false);
        return;
      }

      router.push(`/household-setup?householdId=${json.data.household.id}`);
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
            <Home size={16} className="text-charcoal" strokeWidth={1.75} />
          </div>
          <h2 className="font-bridge text-lg text-charcoal md:text-xl">
            Create a household
          </h2>
        </div>

        <p className="mb-7 text-[15px] leading-relaxed text-charcoal/70">
          Start fresh. Set up a new household and invite your mates to join.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label
            htmlFor="household-name"
            className="text-sm font-medium text-charcoal/80"
          >
            Household Name
          </label>
          <input
            id="household-name"
            name="household-name"
            type="text"
            placeholder="e.g. The Sunny Loft"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError(null);
            }}
            className="h-11 rounded-xl border border-sand-border bg-warm-ivory px-3.5 text-[15px] text-charcoal placeholder:text-charcoal/40 focus:border-charcoal focus:outline-none focus:ring-1 focus:ring-charcoal/15"
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
            Create Household
            <ArrowRight size={16} strokeWidth={2} />
          </>
        )}
      </button>
    </div>
  );
}