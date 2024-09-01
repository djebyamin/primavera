import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Search, Bell, ShoppingCart } from 'lucide-react';
import Ensuite from"@/app/ensuite/page"
import Suite from"@/app/x/suite"
import Pay from"@/app/x/paiment"
import Contact from"@/app/x/contactus"
import Footer from"@/app/x/footer"


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Formation Primavera PG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-md">
        <div className="bg-red-500 text-white py-2 px-4 text-center">
          What ever needs to be added here
        </div>
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <a href="#" className="text-gray-800 hover:text-red-500 transition-colors duration-300 text-lg font-semibold">Accueil</a>
            <a href="/affiche_cours" className="text-gray-800 hover:text-red-500 transition-colors duration-300 text-lg font-semibold">Cours</a>
            <a href="#" className="text-gray-800 hover:text-red-500 transition-colors duration-300 text-lg font-semibold">Formations</a>
            <a href="#" className="text-gray-800 hover:text-red-500 transition-colors duration-300 text-lg font-semibold">Contact</a>
            <a href="#" className="text-gray-800 hover:text-red-500 transition-colors duration-300 text-lg font-semibold">À propos</a>
            <a href="#" className="text-gray-800 hover:text-red-500 transition-colors duration-300 text-lg font-semibold">Devenir formateur</a>
            <a href="#" className="text-gray-800 hover:text-red-500 transition-colors duration-300 text-lg font-semibold">Devenir partenaire</a>
          </div>
          <div className="flex items-center space-x-6">
            <select className="border-none bg-transparent text-gray-800 font-medium focus:outline-none">
              <option>USD</option>
            </select>
            <div className="relative">
              <input type="text" placeholder="Search" className="pl-8 pr-3 py-2 border rounded-full text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-red-500 transition-all duration-300" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" size={20} />
            </div>
            <Bell className="text-gray-600 hover:text-red-500 transition-colors duration-300" size={20} />
            <ShoppingCart className="text-gray-600 hover:text-red-500 transition-colors duration-300" size={20} />
            <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-600 transition-colors duration-300">Commencez</button>
          </div>
        </nav>
     
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex mb-12">
          <div className="w-1/2 pr-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Formation Primavera P6</h1>
            <h2 className="text-3xl font-bold text-red-500 mb-4">Apprenez à votre rythme, où que vous soyez</h2>
            <p className="text-xl text-gray-700 mb-6">
              Bienvenue sur FPG, votre référence en formation spécialisée pour Primavera P6
            </p>
            <p className="text-gray-600 mb-6">
              Que vous soyez un professionnel cherchant à approfondir ses compétences ou un débutant en gestion de projets, nous avons des formations adaptées à tous les niveaux.
            </p>
            <div className="flex space-x-4 mb-6">
              <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300">Je me lance</button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300">Découvrez nos cours</button>
            </div>
            <div className="flex space-x-4 text-sm text-gray-600">
              <span>✓ Formateurs certifiés</span>
              <span>✓ Flexibilité totale</span>
              <span>✓ Contenu actualisé</span>
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto p-6">
            <div className="flex space-x-6">
            <div
  className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between flex-1 relative overflow-hidden"
  style={{ backgroundImage: 'url(/girl.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  <div className="absolute inset-0 bg-black opacity-30"></div> {/* Optional overlay for text readability */}
  <div className="relative z-10">
    <h3 className="text-2xl font-bold mb-3">Vidéos</h3>
    <p className="text-gray-700 mb-4">
      Accédez à une bibliothèque complète de vidéos
    </p>
    <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
      <li>Apprenez quand et où cela vous convient</li>
      <li>Modules courts et ciblés</li>
      <li>Revoit les notions à votre guise</li>
    </ul>
    <button className="mt-4 text-blue-500 hover:text-blue-700 flex items-center">
      Parcourir les formations
      <span className="ml-2 text-lg">→</span>
    </button>
  </div>
</div>


              <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col justify-between flex-1">
                <h3 className="text-lg font-semibold text-gray-800">Formation Personnalisée</h3>
              </div>

              <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col justify-between flex-1">
                <h3 className="text-lg font-semibold text-gray-800">Cours en direct</h3>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-gray-100 py-10">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Best Selling Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 overflow-hidden"
              >
                <Image
                  src={`/pg.png`}
                  alt="Course"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800 hover:text-indigo-600 transition-colors">
                    Gestion d'un projet aéronautique avec Primavera P6
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">265.7k students</p>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-sm text-gray-600 ml-2">5.0</span>
                  </div>
                  <p className="text-xl font-bold text-gray-800">$57</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Ensuite/>
        <Suite/>
        <Pay/>
        <Contact/>
      </main>

      <footer >
       <Footer/>
      </footer>
    </div>
  );
};

export default HomePage;
