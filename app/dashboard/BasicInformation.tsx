import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
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
import { useState } from "react";

export default function BasicInformation() {
  const steps = [
    "Basic Information",
    "Advance Information",
    "Curriculum",
    "Publish Course",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const courseSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    subtitle: z.string().min(1, { message: "Subtitle is required" }),
    category: z.string().min(1, { message: "category" }),
    topic: z.string().min(1, { message: "Topic is required" }),
    language: z.string().min(1, { message: "Topic is required" }),
    duration: z.string().min(1, { message: "Duration is required" }),
  });

  const form = useForm<z.infer<typeof courseSchema>>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      category: "",
      topic: "",
      duration: "",
      language: "",
    },
  });
  const [basicObj, setBasicObj] = useState({
    title: "",
    subtitle: "",
    category: "",
    topic: "",
    language: "",
    duration: "",
  });

  const onSubmit = (values: z.infer<typeof courseSchema>) => {
    setBasicObj(values);
    handleNext();
    console.log(values);
    console.log(basicObj, "amine");
  };

  return (
    <TabsContent value="basic-information">
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-bold mb-4">Basic Information</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>title</FormLabel>
                    <FormControl>
                      <Input placeholder="Your course title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="subtitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subtitle</FormLabel>
                    <FormControl>
                      <Input placeholder="Your course subtitle" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select ..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="developpment">
                          developpment
                        </SelectItem>
                        <SelectItem value="it">IT & software</SelectItem>
                        <SelectItem value="finance">finance</SelectItem>
                        <SelectItem value="marketing">marketing</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Topic</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="what is your taught in your course "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Language</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select ..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="spain">Spain</SelectItem>
                        <SelectItem value="germany">Germany</SelectItem>
                        <SelectItem value="hungary">Hungary</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Select the course duration"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                >
                  Previous
                </Button>
                <Button
                  type="submit"
                  className="bg-[#ff385c]"
                  onClick={handleNext}
                  disabled={currentStep === steps.length - 1}
                >
                  Nextbasic
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
