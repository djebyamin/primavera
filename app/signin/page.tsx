import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import SigninPageClient from "@/app/signin/SigninPageClient";

export default async function SigninPage() {
  const session = await auth();

  if (session) {
   
    redirect("/dashboard");  // Redirection vers le tableau de bord si l'utilisateur est authentifié
  }

  return <SigninPageClient />;
}
