'use client'
import { useState } from "react";
import Image from "next/image";
import {
  FiCopy,
  FiFacebook,
  FiTwitter,
  FiMail,
  FiMessageSquare,
} from "react-icons/fi";

export default function CoursePage() {
  const [activeTab, setActiveTab] = useState("Overview");

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

        {/* Right Side */}
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

          {/* Social Share */}
          <div className="flex space-x-2 mt-4">
            <button className="flex items-center px-4 py-2 space-x-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
              <FiCopy className="w-5 h-5" />
              <span>Copier le lien</span>
            </button>

            <button className="flex items-center justify-center w-10 h-10 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
              <FiFacebook className="w-5 h-5" />
            </button>

            <button className="flex items-center justify-center w-10 h-10 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
              <FiTwitter className="w-5 h-5" />
            </button>

            <button className="flex items-center justify-center w-10 h-10 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
              <FiMail className="w-5 h-5" />
            </button>

            <button className="flex items-center justify-center w-10 h-10 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
              <FiMessageSquare className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="course-overview mt-12 p-8 bg-gray-50">
        {/* Tabs */}
        <div className="tabs flex space-x-4 mb-8">
          <button
            className={`tab py-2 px-4 ${
              activeTab === "Overview"
                ? "border-b-2 border-red-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("Overview")}
          >
            Overview
          </button>
          <button
            className={`tab py-2 px-4 ${
              activeTab === "Curriculum"
                ? "border-b-2 border-red-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("Curriculum")}
          >
            Curriculum
          </button>
          <button
            className={`tab py-2 px-4 ${
              activeTab === "Instructor"
                ? "border-b-2 border-red-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("Instructor")}
          >
            Instructor
          </button>
          <button
            className={`tab py-2 px-4 ${
              activeTab === "Reviews"
                ? "border-b-2 border-red-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("Reviews")}
          >
            Reviews
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "Overview" && (
            <div className="overview mb-8">
              <h2 className="text-xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600">
                Cette formation vous apprendra des techniques avancées pour
                optimiser la planification, l’exécution et le contrôle de vos
                projets. Vous apprendrez à…
              </p>
            </div>
          )}

          {activeTab === "Curriculum" && (
            <div className="curriculum mb-8">
              <h2 className="text-xl font-bold mb-4">Curriculum</h2>
              <p className="text-gray-600">
                Voici le programme détaillé du cours. Chaque module contient des
                vidéos, des exercices et des quiz pour vous aider à maîtriser
                les concepts.
              </p>
            </div>
          )}

          {activeTab === "Instructor" && (
            <div className="about-instructor mb-8">
              <h2 className="text-xl font-bold mb-4">About the Instructor</h2>
              <p className="text-gray-600">
                Instructor Name est un professionnel expérimenté avec des années
                d'expérience dans XYZ…
              </p>
            </div>
          )}

          {activeTab === "Reviews" && (
            <div className="reviews mb-8">
              <h2 className="text-xl font-bold mb-4">Student Reviews</h2>
              <p className="text-gray-600">
                Découvrez ce que les autres étudiants pensent de ce cours.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
