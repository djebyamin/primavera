import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import Aa from "@/app/az/aa";

export default async function SigninPage() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return <Aa/>;
}
