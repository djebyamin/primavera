import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import SigninPageClient from "@/app/signin/SigninPageClient";

export default async function SigninPage() {
  // Récupère la session utilisateur
  const session = await auth();

  // Si la session existe, redirige vers la page dashboard
  if (session) {
    // Vous pouvez récupérer les données de l'utilisateur ici
    const userData = session.user; // Exemple: accès aux données utilisateur
    
    // Optionnel: utiliser les données utilisateur comme nécessaire
    console.log(userData);
    

    // Redirection vers la page dashboard
    redirect("/dashboard");
  }

  // Retourne le composant SigninPageClient si la session n'existe pas
  return <SigninPageClient />;
}
