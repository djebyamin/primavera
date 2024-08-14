"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as Checkbox from "@radix-ui/react-checkbox";
import { signIn } from "../SignInAction";

// Define the form validation schema with Zod
const formSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." }),
  });

export default function SignInPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await signIn(values);

    if (response.status === 200) {
      console.log("Sign-in successful:", response.data);
      
      alert("sa7yt");

    } else {
      console.error("Sign-in failed:", response.message);
      
      alert("3awed");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 bg-purple-100 flex items-center justify-center">
        <img
          src={"/az.png"}
          alt="Illustration"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-900">Sign In</h2>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center mb-4">
                <Checkbox.Root
                  id="remember"
                  className="w-4 h-4 flex items-center justify-center border border-gray-300 rounded"
                >
                  <Checkbox.Indicator className="w-4 h-4 flex items-center justify-center bg-blue-500 rounded">
                    {/* Add a checkmark or icon here if needed */}
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white"
              >
                Sign In
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">SIGN IN WITH</p>
            <div className="flex justify-center mt-4">
              <Button variant="outline" className="mx-2">
                <FaGoogle className="mr-2" /> Google
              </Button>
              <Button variant="outline" className="mx-2">
                <FaFacebook className="mr-2" /> Facebook
              </Button>
              <Button variant="outline" className="mx-2">
                <FaApple className="mr-2" /> Apple
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
