"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

// Schéma de validation Zod
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Le titre doit comporter au moins 2 caractères.",
  }),
  description: z.string().min(5, {
    message: "La description doit comporter au moins 5 caractères.",
  }),
  notes: z.string().optional(),
  video: z.instanceof(File).optional(),
  subtitle: z.array(z.instanceof(File)).optional(),
});

export default function Curriculum() {
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [selectedSubtitles, setSelectedSubtitles] = useState<File[]>([]);

  // Utilisation du resolver Zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [curriculum, setcurriculum] = useState({
    title: "",
    message: "",
    notes: "",
    video: "",
    subtitle: "",
  });

  // Collecter les données du formulaire
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Collecter les données dans l'objet `curriculum`
    

    console.log("Curriculum Data:", curriculum);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedVideo(e.target.files[0]);
    }
  };

  const handleSubtitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedSubtitles(Array.from(e.target.files));
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Champ Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre</FormLabel>
              <FormControl>
                <Input placeholder="Entrez le titre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Champ Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Entrez la description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Champ Notes */}
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Entrez des notes (optionnel)"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Téléchargement de la vidéo */}
        <FormItem>
          <FormLabel>Vidéo de la leçon</FormLabel>
          <FormControl>
            <Input type="file" accept="video/*" onChange={handleFileChange} />
          </FormControl>
          {selectedVideo && <p>{selectedVideo.name}</p>}
          <FormDescription>
            Tous les fichiers doivent être en résolution d'au moins 480p et
            peser moins de 4.0 Go.
          </FormDescription>
        </FormItem>

        {/* Téléchargement des sous-titres */}
        <FormItem>
          <FormLabel>Sous-titres</FormLabel>
          <FormControl>
            <Input
              type="file"
              accept=".srt"
              onChange={handleSubtitleChange}
              multiple
            />
          </FormControl>
          {selectedSubtitles.length > 0 && (
            <ul>
              {selectedSubtitles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}
        </FormItem>

        {/* Bouton Ajouter Section */}
        <Button type="submit">Ajouter la section</Button>
      </form>
    </Form>
  );
}
