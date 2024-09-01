"use client"

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

// Schema validation with zod
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  course: z.string().min(3, { message: "Course name is required." }),
  slots: z.number().min(1, { message: "You must request at least 1 slot." }),
  date: z.string().min(1, { message: "Please select a date." }),
});

export default function PersonalizedCourseForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      course: "",
      slots: "",
      date: "",
    },
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12 bg-gray-50 rounded-md shadow-lg">
      {/* Left Section: Contact Information */}
      <div className="flex flex-col justify-start space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Request a Personalized Course</h2>
          <p className="text-gray-600">
            Need a personalized course for you or your team? Contact us now and request a course.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-red-600 font-semibold">PHONE NUMBER</h3>
            <p className="text-gray-800">(480) 555-0103</p>
            <p className="text-gray-800">(219) 555-0114</p>
          </div>

          <div>
            <h3 className="text-red-600 font-semibold">EMAIL ADDRESS</h3>
            <p className="text-gray-800">help.eduguard@gmail.com</p>
            <p className="text-gray-800">career.eduguard@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-gray-700 mb-6">
          Feel free to contact us, we love to make new partners & friends.
        </h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Needed Course</FormLabel>
                  <FormControl>
                    <Input placeholder="Course" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="slots"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slots</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Slots" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date and Time</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Input
                          placeholder="Pick a date"
                          value={date ? format(date, "PPP") : ""}
                          readOnly
                          {...field}
                        />
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(newDate) => {
                          setDate(newDate);
                          field.onChange(format(newDate!, "yyyy-MM-dd"));
                        }}
                        className="rounded-md border"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
              Contact Teacher
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
