import { signIn } from "@/app/auth"; // Assurez-vous que le module auth est correctement configuré

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        className="p-8 bg-gray-800 rounded-md shadow-md"
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Sign in with Google
        </button>
      </form>
    </div>
  );
}
