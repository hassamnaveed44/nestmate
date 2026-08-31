"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Home, ArrowRight, Loader2 } from "lucide-react";

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
    <div className="group flex h-full flex-col justify-between rounded-2xl border border-sand-border bg-soft-sand/40 p-7 shadow-[0_2px_8px_rgba(23,23,20,0.03)] backdrop-blur-xs transition-all duration-200 hover:border-charcoal/30 hover:shadow-[0_4px_16px_rgba(23,23,20,0.06)] md:p-8">
      <div>
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-sand-border bg-warm-ivory shadow-xs">
          <Home size={18} className="text-charcoal" strokeWidth={1.75} />
        </div>

        <h2 className="font-bridge text-lg font-medium text-charcoal md:text-xl">
          Create a household
        </h2>
        <p className="mt-1.5 mb-7 text-sm leading-relaxed text-charcoal/70">
          Start fresh. Establish your household ledger, configure rent splits, and invite roommates.
        </p>

        <form id="create-household-form" onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label
            htmlFor="household-name"
            className="text-xs font-semibold tracking-wider text-charcoal/80 uppercase"
          >
            Household Name
          </label>
          <input
            id="household-name"
            name="household-name"
            type="text"
            placeholder="e.g. The Sunny Loft, Apt 4B"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError(null);
            }}
            className="h-11 rounded-xl border border-sand-border bg-warm-ivory px-3.5 text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus:border-charcoal focus:ring-1 focus:ring-charcoal focus:outline-none"
          />
          {error && (
            <p className="mt-1.5 text-xs font-medium text-terracotta">{error}</p>
          )}
        </form>
      </div>

      <button
        type="submit"
        form="create-household-form"
        disabled={loading}
        className="mt-8 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-charcoal text-sm font-medium text-warm-ivory shadow-sm transition-all duration-150 hover:bg-[#262622] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin text-warm-ivory" />
        ) : (
          <>
            Create Household
            <ArrowRight size={15} strokeWidth={2} />
          </>
        )}
      </button>
    </div>
  );
}