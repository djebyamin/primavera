import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import SigninPageClient from "@/app/signin/SigninPageClient";
import Dsh from "@/app/dashboard/dsh"; 

export default async function SigninPage() {
  const session = await auth();

  if (!session) {
    
    return <SigninPageClient />;
  }

  return <Dsh />;
}
