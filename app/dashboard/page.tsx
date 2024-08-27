import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import Dsh from "@/app/dashboard/dsh";

export default async function SigninPage() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return (
    <Dsh
      formData={{
        title: "",
        subtitle: "",
        category: "",
        topic: "",
        language: "",
        duration: "",
      }}
    />
  );
}
