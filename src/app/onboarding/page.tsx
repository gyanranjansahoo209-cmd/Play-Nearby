import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import OnboardingClient from "@/app/onboarding/OnboardingClient";


export default async function Onboarding() {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }

  return <OnboardingClient />;
}
