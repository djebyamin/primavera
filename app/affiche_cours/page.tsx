import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import Cours from "@/app/affiche_cours/cours";

export default async function SigninPage() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return <Cours/>;
}
