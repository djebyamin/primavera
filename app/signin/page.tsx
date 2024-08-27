import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import SigninPageClient from "@/app/signin/SigninPageClient";
import { newUser } from "../SignupAction";
import { UserRole } from "@prisma/client";
// Assuming UserRole is defined in models

export default async function SigninPage() {
  // Récupère la session utilisateur
  const session = await auth();

  // Si la session existe, redirige vers la page dashboard
  if (session) {
    const userData = session.user;

    // Logging user data (optional)
    console.log(userData);

    // Appel de newUser pour enregistrer un nouvel utilisateur si besoin
    if (userData?.name && userData?.email) {
      // Crée un objet utilisateur avec les champs supplémentaires
      const userObj = {
        name: userData.name,
        email: userData.email,
        password: "defaultPassword", // Mot de passe temporaire par défaut
        status: "active", // Statut par défaut
        role: "ADMIN" as UserRole, // Rôle par défaut (vous pouvez définir d'autres valeurs selon UserRole)
      };

      // Enregistrer le nouvel utilisateur
      await newUser(userObj);
    }

    // Redirection vers la page dashboard
    redirect("/dashboard");
  }

  // Retourne le composant SigninPageClient si la session n'existe pas
  return <SigninPageClient />;
}
