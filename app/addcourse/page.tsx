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
import { useRouter } from "next/navigation";
import { createCourse } from "../addcourseAction";

const formSchema = z.object({
  nom: z.string().min(2, { message: "Name must be at least 2 characters." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
  prix: z
    .string()
    .min(1, { message: "Price must be a positive number." })
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Price must be a positive number.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function CourseCreationForm() {
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      description: "",
      prix: 0,
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      await createCourse(values);
      console.log("Course created successfully!");
      
      alert("course added");
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Course Name" {...field} />
              </FormControl>
              <FormDescription>Enter the name of the course.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Course Description" {...field} />
              </FormControl>
              <FormDescription>
                Provide a detailed description of the course.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="prix"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Course Price" {...field} />
              </FormControl>
              <FormDescription>Enter the price of the course.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Create Course</Button>
      </form>
    </Form>
  );
}
