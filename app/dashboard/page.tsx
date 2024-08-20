import { redirect } from 'next/navigation';
import { auth } from '@/app/auth';
import SigninPageClient from "@/app/signin/SigninPageClient";
import Dsh from "@/app/dashboard/dsh"; // Ensure this is correctly capitalized

export default async function SigninPage() {
  const session = await auth();

  if (!session) {
    // Redirect to the sign-in page if the user is not authenticated
    return <SigninPageClient />;
  }

  // Render the dashboard if the user is authenticated
  return <Dsh />;
}
