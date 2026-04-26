import { db } from "@/lib/db";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import EditProfileForm from "@/components/profile/EditProfileForm";
import Navbar from "@/components/layout/Navbar";

export default async function EditProfilePage() {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
  });

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <EditProfileForm user={user} />
    </div>
  );
}
