import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import SigninPageClient from "@/app/signin/SigninPageClient";
import { newUser } from "../SignupAction";
import { UserRole } from "@prisma/client";

export default async function SigninPage() {
  const session = await auth();

  if (session) {
    const userData = session.user;

    console.log(userData);

    if (userData?.name && userData?.email) {
      const userObj = {
        name: userData.name,
        email: userData.email,
        password: "defaultPassword",
        status: "active",
        role: "ADMIN" as UserRole,
      };

      await newUser(userObj);
    }

    redirect("/dashboard");
  }

  return <SigninPageClient />;
}
