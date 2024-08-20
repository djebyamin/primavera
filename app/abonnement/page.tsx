import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <main className="space-y-16">
        <section className="text-center py-16">
          <h2 className="text-gray-600 tracking-widest text-sm uppercase mb-4">Abonnement</h2>
          <h1 className="text-3xl font-bold mb-8">Parcourez nos abonnements mensuels.</h1>
          <div className="flex justify-center items-center space-x-10">
            <div className="bg-red-500 text-white p-8 rounded-lg shadow-lg w-1/3">
              <h3 className="text-xl font-bold mb-4">Abonnement tout en 1</h3>
              <ul className="list-none space-y-3 mb-6">
                <li>✔️ Accès à Tout cours</li>
                <li>✔️ Accès libre aux formations en ligne</li>
                <li>✔️ Contenu premium</li>
                <li>✔️ Communauté exclusive</li>
              </ul>
              <p className="text-lg mb-6">À partir de <strong>14€/Mois</strong></p>
              <button className="bg-black text-white py-2 px-4 rounded-full">Commencez dès aujourd'hui</button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
              <ol className="space-y-4 text-left text-gray-800">
                <li>
                  <strong className="text-lg">1. Text Content</strong>
                  <p>Texte normal</p>
                </li>
                <li>
                  <strong className="text-lg">2. Text Content</strong>
                  <p>Text Content</p>
                </li>
                <li>
                  <strong className="text-lg">3. Text Content</strong>
                  <p>Text Content</p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 text-white rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Vous êtes étudiant ? Optez pour notre pack étudiants</h2>
              <ul className="list-disc list-inside mb-6">
                <li>Text du contenu</li>
                <li>Téléchargement illimité</li>
                <li>Certification gratuite</li>
              </ul>
              <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">
                Commencer maintenant
              </button>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src="/student-image.jpg"
                alt="Étudiant au téléphone"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-10">Ce qu'on dit de nous</h2>
          <div className="p-10 rounded-lg max-w-md mx-auto mb-8" style={{ backgroundColor: '#f3f4e9' }}>
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/testimonial-image.jpg"
                alt="Photo de profil"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <p className="italic mb-2">"Text."</p>
            <p className="font-semibold">Marie M.</p>
            <div className="flex justify-around">
            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p>Clients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">9/10</h3>
              <p>Score</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">96%</h3>
              <p>Taux de satisfaction</p>
            </div>
          </div>
          </div>
          
        </section>
      </main>
    </div>
  )
}
