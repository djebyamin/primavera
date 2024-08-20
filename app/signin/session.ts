import { auth } from "@/app/auth";

export async function getSession() {
  const session = await auth();
  return session;
}