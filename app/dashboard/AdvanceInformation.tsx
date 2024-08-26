"use client";
import { useState } from "react";
import { supabase } from "../supabase";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function AdvanceInformation() {
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  // Définition du schéma de validation Zod
  const videoSchema = z.object({
    video: z.instanceof(File).refine((file) => file.size <= 100 * 1024 * 1024, {
      message: "La taille de la vidéo dépasse 100 Mo.",
    }),
    description: z.string().min(10, { message: "Description is required." }),
  });

  // Utilisation de useForm avec zodResolver pour la validation
  const form = useForm<z.infer<typeof videoSchema>>({
    resolver: zodResolver(videoSchema),
    defaultValues: {
      description: "",
    },
  });

  // Fonction de soumission du formulaire
  const onSubmit = async (values: z.infer<typeof videoSchema>) => {
    setUploading(true);
    setUploadStatus("");

    // Collecter les données du formulaire dans l'objet advobj
    const advobj = {
      video: values.video,
      description: values.description,
    };

    try {
      // Upload de la vidéo avec Supabase
      const { data, error } = await supabase.storage
        .from("videos")
        .upload(`public/${Date.now()}_${advobj.video.name}`, advobj.video, {
          cacheControl: "3600",
          upsert: false,
          contentType: advobj.video.type,
        });

      if (error) {
        setUploadStatus("Erreur lors de l'upload : " + error.message);
      } else {
        setUploadStatus("Vidéo téléchargée avec succès !");
      }
    } catch (err) {
      setUploadStatus("Erreur inattendue lors de l'upload.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold mb-4">Advance Information</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="video"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Trailer</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="video/*"
                      onChange={(e) =>
                        field.onChange(e.target.files?.[0] ?? null)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Description</FormLabel>
                  <FormControl>
                    <textarea
                      className="w-full h-32 p-2 border rounded"
                      placeholder="Enter course description..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between mt-6">
              <Button type="submit" disabled={uploading}>
                {uploading ? "Uploading..." : "Upload Video"}
              </Button>
            </div>
          </form>
        </Form>
        <p
          className={`mt-4 text-center ${
            uploadStatus.includes("Erreur") ? "text-red-500" : "text-green-500"
          }`}
        >
          {uploadStatus}
        </p>
      </CardContent>
    </Card>
  );
}
