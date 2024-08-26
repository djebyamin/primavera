"use client";
import { useState } from "react";
import { supabase } from "../supabase"; // Assurez-vous d'importer votre client Supabase

export default function UploadVideo() {
  const [video, setVideo] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size <= 100 * 1024 * 1024) {
      // Limite à 100 Mo
      setVideo(file);
      setVideoPreview(URL.createObjectURL(file)); // Générer un aperçu de la vidéo
    } else {
      setUploadStatus("La taille de la vidéo dépasse 100 Mo.");
      setVideo(null);
    }
  };

  const handleUpload = async () => {
    if (!video) {
      setUploadStatus("Veuillez sélectionner une vidéo.");
      return;
    }

    setIsUploading(true);
    setUploadStatus("");

    try {
      const { data, error } = await supabase.storage
        .from("videos")
        .upload(`public/${Date.now()}_${video.name}`, video, {
          cacheControl: "3600",
          upsert: false,
          contentType: video.type,
        });

      if (error) {
        setUploadStatus("Erreur lors de l'upload : " + error.message);
      } else {
        setUploadStatus("Vidéo téléchargée avec succès !");
      }
    } catch (err) {
      setUploadStatus("Erreur inattendue lors de l'upload.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Upload de vidéo
        </h1>

        {videoPreview && (
          <div className="mb-6">
            <video src={videoPreview} controls className="w-full rounded-lg" />
          </div>
        )}

        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
        />

        <button
          onClick={handleUpload}
          className={`mt-6 w-full py-2 px-4 rounded-lg transition duration-300 ${
            isUploading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
          disabled={isUploading}
        >
          {isUploading ? "Téléchargement en cours..." : "Télécharger la vidéo"}
        </button>

        {isUploading && (
          <div className="mt-4 w-full bg-gray-200 rounded-full">
            <div
              className="bg-indigo-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          </div>
        )}

        <p
          className={`mt-4 text-center ${
            uploadStatus.includes("Erreur") ? "text-red-500" : "text-green-500"
          }`}
        >
          {uploadStatus}
        </p>
      </div>
    </div>
  );
}
