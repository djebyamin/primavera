import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import Cours from "@/app/affiche_cours/cours";
import { UserRole } from "@prisma/client";
import { newUser } from "../SignupAction";

export default async function SigninPage() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }
  const userData = session.user;

  console.log(userData);

  // if (userData?.name && userData?.email) {
  //   const userObj = {
  //     name: userData.name,
  //     email: userData.email,
  //     password: "defaultPassword",
  //     status: "active",
  //     role: "ADMIN" as UserRole,
  //   };

  //   await newUser(userObj);
  // }


  return <Cours />;
}
