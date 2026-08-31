import { HouseholdEntryScreen } from "@/components/onboarding/HouseholdEntryScreen";

interface JoinHouseholdPageProps {
  searchParams: Promise<{ code?: string }>;
}

export default async function JoinHouseholdPage({
  searchParams,
}: JoinHouseholdPageProps) {
  const { code } = await searchParams;
  return <HouseholdEntryScreen initialCode={code} />;
}