"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  FaGoogle,
  FaFacebook,
  FaApple,
  FaSearch,
  FaBell,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
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
import { ToastContainer, toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import * as Checkbox from "@radix-ui/react-checkbox";
import { useState } from "react";
import { newUser } from "../SignupAction";

const formSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters." }),
    lastName: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." }),
    confirmPassword: z
      .string()
      .min(6, { message: "Please confirm your password." }),
    terms: z.boolean().refine((value) => value === true, {
      message: "You must accept the terms and conditions.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function ProfileForm() {
  const [searchQuery, setSearchQuery] = useState("");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { firstName, lastName, email, password } = values;
    try {
      await newUser({
        name: `${firstName} ${lastName}`,
        email,
        password,
        status: "active",
        role: "ADMIN",
      });
      toast.success("Your account has been created successfully.");
    } catch (error) {
      console.log(error);
      toast.error("There was an error creating your account.");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex items-center justify-between py-4 bg-white shadow-md px-4">
        <div className="flex items-center space-x-2">
          <img src={"/logo.png"} alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold">Formation Primavera</span>
        </div>

        <div className="relative flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg px-4 py-2 w-full pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FaBell className="text-gray-500 cursor-pointer" />
          <FaHeart className="text-gray-500 cursor-pointer" />
          <div className="relative">
            <FaShoppingCart className="text-gray-500 cursor-pointer" />
            <button className="absolute -bottom-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              Start
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        <div className="w-1/2 bg-purple-100 flex items-center justify-center">
          <img
            src={"/az.png"}
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Create your account
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="flex space-x-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

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

                <div className="flex space-x-4">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Create Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Create password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Confirm password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center mb-4">
                        <Checkbox.Root
                          id="terms"
                          className="w-4 h-4 flex items-center justify-center border border-gray-300 rounded"
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        >
                          <Checkbox.Indicator className="w-4 h-4 flex items-center justify-center bg-blue-500 rounded">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </Checkbox.Indicator>
                        </Checkbox.Root>
                        <label
                          htmlFor="terms"
                          className="ml-2 text-sm text-gray-700"
                        >
                          I agree with all of your{" "}
                          <a href="#" className="text-blue-500">
                            Terms & Conditions
                          </a>
                        </label>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg py-2"
                >
                  Create your account
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
