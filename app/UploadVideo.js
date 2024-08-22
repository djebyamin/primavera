// UploadVideo.js
import { useState } from 'react';
import { supabase } from './supabaseClient'; // Importer le client Supabase

function UploadVideo() {
  const [video, setVideo] = useState(null);

  const handleFileChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (video) {
      const { data, error } = await supabase.storage
        .from('videos')
        .upload(`public/${video.name}`, video, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) {
        console.error('Erreur lors de l\'upload :', error.message);
      } else {
        console.log('Vidéo uploadée avec succès', data);
      }
    }
  };

  return (
    <div>
      <h2>Télécharger une vidéo</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Télécharger la vidéo</button>
    </div>
  );
}

export default UploadVideo;
