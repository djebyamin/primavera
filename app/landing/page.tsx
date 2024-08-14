import Image from "next/image";
import {
  FiCopy,
  FiFacebook,
  FiTwitter,
  FiMail,
  FiMessageSquare,
} from "react-icons/fi";

export default function CoursePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-red-600 text-white text-center p-2 text-sm">
        Remise Black Friday jusqu'au 23 juin 2024
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-gray-100">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold">Formation Primavera</div>
          <input
            type="text"
            placeholder="Gestion de projet"
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <i className="fas fa-bell"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-shopping-cart"></i>
          </div>
          <button className="bg-red-600 text-white py-2 px-4 rounded-md">
            Commencez
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-8 flex">
        {/* Left Side */}
        <div className="w-2/3 pr-8">
          <h1 className="text-3xl font-bold mb-4">
            Gestion d’un projet aéronautique avec Primavera P6
          </h1>
          <p className="text-gray-600 mb-4">
            Vous êtes un utilisateur expérimenté de Primavera P6 et vous
            souhaitez approfondir vos connaissances ? Cette formation vous
            apprendra des techniques avancées pour optimiser la planification,
            l’exécution et le contrôle de vos projets…
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <div className="font-bold">Créé par :</div>
            <div>Amine Ghdhabb • Senior Project Manager</div>
            <div className="flex items-center">
              <span className="text-red-600 font-bold ml-4">4.8</span>
              <span className="text-gray-600">(451 444 évaluations)</span>
            </div>
          </div>
          <Image
            src="/your-image-url.png"
            alt="Image du cours"
            width={600}
            height={300}
            className="rounded-md"
          />
        </div>

        <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
          {/* Price Section */}
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-red-500">14,00 €</div>
            <div className="line-through text-gray-500">26,00 €</div>
            <div className="ml-2 text-sm font-semibold text-red-600">-56%</div>
          </div>
          <div className="mt-2 text-red-600">2 jours restants à ce prix !</div>

          {/* Course Details */}
          <div className="mt-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div>📅 Durée du cours</div>
              <div>6 mois</div>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>📊 Niveau du cours</div>
              <div>Débutant et intermédiaire</div>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>👥 Étudiants inscrits</div>
              <div>69 419 618</div>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>🗣 Langue</div>
              <div>Français</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col mt-4 space-y-2">
            <button className="w-full py-2 font-semibold text-white bg-red-500 rounded-md hover:bg-red-600">
              Acheter maintenant
            </button>
            <button className="w-full py-2 font-semibold text-red-500 bg-red-100 rounded-md hover:bg-red-200">
              Ajouter au panier
            </button>
            <div className="flex justify-between mt-2 space-x-2">
              <button className="w-full py-2 font-semibold text-gray-600 border rounded-md hover:bg-gray-100">
                Ajouter à la liste de souhaits
              </button>
              <button className="w-full py-2 font-semibold text-gray-600 border rounded-md hover:bg-gray-100">
                Offrir le cours
              </button>
            </div>
          </div>

          {/* Course Includes */}
          <div className="mt-6">
            <h4 className="mb-2 text-lg font-bold">Ce cours comprend :</h4>
            <ul className="space-y-2 text-gray-600">
              <li>⏳ Accès à vie</li>
              <li>💵 Garantie de remboursement de 30 jours</li>
              <li>
                📁 Fichiers d'exercices gratuits et ressources téléchargeables
              </li>
              <li>📱 Accès sur mobile, tablette et TV</li>
              <li>💻 Cours 100% en ligne</li>
            </ul>
          </div>

          <div className="flex space-x-2 mt-4">
            {/* Copy Link Button */}
            <button className="flex items-center px-4 py-2 space-x-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
              <FiCopy className="w-5 h-5" />
              <span>Copier le lien</span>
            </button>

            {/* Facebook Button */}
            <button className="flex items-center justify-center w-10 h-10 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
              <FiFacebook className="w-5 h-5" />
            </button>

            {/* Twitter Button */}
            <button className="flex items-center justify-center w-10 h-10 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
              <FiTwitter className="w-5 h-5" />
            </button>

            {/* Email Button */}
            <button className="flex items-center justify-center w-10 h-10 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
              <FiMail className="w-5 h-5" />
            </button>

            {/* WhatsApp Button */}
            <button className="flex items-center justify-center w-10 h-10 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
              <FiMessageSquare className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white py-8">
        {/* Section: Cours Populaires */}
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Cours Populaires</h2>
          <div className="flex justify-between">
            {/* Carte de Cours Populaires */}
            {Array(4)
              .fill("")
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white border rounded-lg shadow-md max-w-xs"
                >
                  <Image
                    src="/path-to-your-course-image.jpg"
                    alt="Cours Populaire"
                    width={400}
                    height={250}
                    className="rounded-t-lg"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">
                        Débutant
                      </span>
                      <span className="bg-yellow-100 text-yellow-600 text-xs font-semibold px-2 py-1 rounded">
                        Bestseller
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Gestion d’un projet aéronautique avec Primavera P6
                    </h3>
                    <div className="text-red-500 text-lg font-bold">$57</div>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="text-gray-600 text-sm">5.0</span>
                      <span className="text-gray-600 text-sm ml-2">
                        265.7K students
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
{/* Main Content */}
<div className="container mx-auto mt-8">
  {/* Section: Formation Direct */}
  <div className="bg-[#ff2d52] text-white p-8 flex justify-center">
    <div className="w-full lg:w-[80%] flex flex-col lg:flex-row">
      <div className="lg:w-1/2 pr-0 lg:pr-8">
        <div className="bg-gray-100 text-red-600 text-xs font-bold px-2 py-1 inline-block mb-4">
          FORMATION DIRECT
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Réservez une place
          <br />
          Dans les cours direct (live)
        </h2>
        <p className="text-gray-200 mb-6">
          Trouvez la date qui correspond à votre emploi du temps pour
          assister à un cours professionnel sur le logiciel Primavera
          P6.
        </p>
        <div className="flex flex-wrap items-center mb-4">
          {["LU", "MA", "ME", "JE", "VE", "SA", "DI"].map((day) => (
            <button
              key={day}
              className={`py-2 px-4 rounded-lg mr-2 mb-2 ${
                day === "MA"
                  ? "bg-red-500 text-white"
                  : "bg-white text-red-600"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-red-600 py-2 px-4 rounded-lg">
            18:00
          </button>
          <button className="bg-white text-red-600 py-2 px-4 rounded-lg">
            19:45
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <Image
          src="/path-to-your-direct-course-image.jpg"
          alt="Formation Direct"
          width={600}
          height={400}
          className="rounded-lg w-full h-auto"
        />
      </div>
    </div>
  </div>
</div>

    </div>
    </div>
  );
}
