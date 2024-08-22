"use client";
import { useState } from "react";
import { supabase } from "../supabase"; // Importer le client Supabase

export default function UploadVideo() {
  const [video, setVideo] = useState<File | null>(null); // Typage correct pour le fichier vidéo
  const [uploadStatus, setUploadStatus] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null; // Gère le cas où aucun fichier n'est sélectionné
    setVideo(file);
  };

  const handleUpload = async () => {
    if (!video) {
      setUploadStatus("Veuillez sélectionner une vidéo.");
      console.log("uploaded")
      return;
    }

    // Upload de la vidéo à Supabase
    const { data, error } = await supabase.storage
      .from("videos") // Assurez-vous d'avoir créé un bucket nommé 'videos' dans Supabase
      .upload(`public/${video.name}`, video, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      setUploadStatus("Erreur lors de l'upload : " + error.message);
    } else {
      setUploadStatus("Vidéo téléchargée avec succès !");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Upload de vidéo</h1>
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
        />
        <button
          onClick={handleUpload}
          className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Télécharger la vidéo
        </button>
        <p className={`mt-4 text-center ${uploadStatus.includes("Erreur") ? "text-red-500" : "text-green-500"}`}>
          {uploadStatus}
        </p>
      </div>
    </div>
  );
}
