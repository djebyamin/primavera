  import Image from 'next/image';


  export default function CoursePage() {
    return (
      <div className="bg-white">
        {/* Header */}
        <div className="bg-red-600 text-white text-center p-2 text-sm">
          Remise Black Friday jusqu'au 23 juin 2024
        </div>

        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row justify-between items-center p-6 bg-gray-100">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
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

        <div className="relative flex flex-col lg:flex-row">
          {/* Left Side: Course Information */}
          <div className="lg:w-2/3 p-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-red-500 mb-4">
              Formation Primavera P6
            </h1>
            <h2 className="text-2xl lg:text-3xl font-bold text-red-500 mb-4">
              Apprenez à votre rythme, où que vous soyez
            </h2>
            <p className="text-base lg:text-lg mb-6">
              Apprenez Primavera P6 selon vos besoins et votre emploi du temps chargé. Choisissez parmi des vidéos à la demande complètes, des cours en direct interactifs dirigés par des instructeurs certifiés, ou des sessions personnalisées pour une approche ciblée. Peu importe votre niveau de compétence actuel.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6">
              <button className="bg-red-500 text-white py-2 px-4 rounded mb-2 sm:mb-0">
                Créez un compte
              </button>
              <button className="bg-gray-100 text-black py-2 px-4 rounded">
                Découvrez nos cours
              </button>
            </div>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>✔️ Satisfait ou Remboursé</li>
              <li>✔️ 100% en ligne</li>
              <li>✔️ Session personnalisées</li>
            </ul>
          </div>

          {/* Right Side: Media Content */}
          <div className="lg:w-1/3 p-4 flex flex-col space-y-4">
            {/* Video Section */}
            <div className="bg-gray-200 rounded-lg p-6 relative">
              <h3 className="text-xl font-bold mb-4">Vidéos</h3>
              <p className="text-lg mb-4">
                Accédez à une bibliothèque complète de vidéos
              </p>
              <ul className="text-sm mb-6">
                <li>• Apprenez quand et où cela vous convient.</li>
                <li>• Modules courts et ciblés.</li>
                <li>• Recevez les réactions à votre guise.</li>
              </ul>
              <button className="text-red-500">Parcourir les formations</button>
              {/* User Icon */}
              <div className="absolute top-4 right-4 bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                M
              </div>
            </div>

            {/* Vertical Tabs */}
            <div className="flex flex-col space-y-2">
              <button className="bg-gray-300 text-black py-2 px-4 rounded-lg">
                Formation Personnalisé
              </button>
              <button className="bg-gray-300 text-black py-2 px-4 rounded-lg">
                Cours en direct
              </button>
            </div>
          </div>
        </div>

        {/* Section: Cours Populaires */}
        <div className="bg-white py-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6">Cours Populaires</h2>
            <div className="flex flex-wrap justify-between">
              {/* Carte de Cours Populaires */}
              {Array(4)
                .fill("")
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-white border rounded-lg shadow-md max-w-xs mb-4"
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
        </div>

        {/* Main Content */}
        <div className="container mx-auto mt-8">
          {/* Section: Formation Direct */}
          <div className="bg-[#ff2d52] text-white p-8 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 pr-0 lg:pr-8">
              <div className="bg-gray-100 text-red-600 text-xs font-bold px-2 py-1 inline-block mb-4">
                FORMATION DIRECT
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
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
                      day === ""
                        ? "bg-red-500 text-white"
                        : "bg-white text-red-600"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center space-x-4">
                <button className="bg-white text-red-600 py-2 px-4 rounded-lg mb-2">
                  18:00
                </button>
                <button className="bg-white text-red-600 py-2 px-4 rounded-lg mb-2">
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
    );
  }
