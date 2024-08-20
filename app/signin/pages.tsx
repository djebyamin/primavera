import { redirect } from 'next/navigation';
import { auth } from "@/app/auth";
import SigninPageClient from './SigninPageClient';

export default async function SigninPage() {
  const session = await auth();

  if (session) {
    redirect('/dashboard');
  }

  return <SigninPageClient />;
}