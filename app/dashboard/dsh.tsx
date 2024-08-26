"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signOut } from "next-auth/react";
import BasicInformation from "@/app/dashboard/BasicInformation";
import AdvanceInformation from "@/app/dashboard/AdvanceInformation";
import Curriculum from "@/app/dashboard/Curriculum";
import PublishCourse from "@/app/dashboard/PublishCourse";
import basicObj from "@/app/dashboard/BasicInformation";
import advobj from "@/app/dashboard/AdvanceInformation";


const steps = [
  "Basic Information",
  "Advance Information",
  "Curriculum",
  "Publish Course",
];
type NextComponentProps = {
  formData: {
    title: string;
    subtitle: string;
    category: string;
    topic: string;
    language: string;
    duration: string;
  };
};

export default function CreateCourse({ formData }: NextComponentProps)  {


  <div>
  <h2>Course Information</h2>
  <p>Title: {formData.title}</p>
  <p>Subtitle: {formData.subtitle}</p>
  <p>Category: {formData.category}</p>
  <p>Topic: {formData.topic}</p>
  <p>Language: {formData.language}</p>
  <p>Duration: {formData.duration}</p>
</div>
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



  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a1a1a] text-white p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold">Formation primavera</h2>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="bg-[#ff385c] py-2 px-4 rounded">
              <Link href="/create-course">Create New Course</Link>
            </li>
            <li>
              <Link href="/my-courses">My Courses</Link>
            </li>
            <li>
              <Link href="/earning">Earning</Link>
            </li>
            <li>
              <Link href="/message">Message</Link>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
          </ul>
          <Button
            onClick={() => signOut({ callbackUrl: "/" })}
            variant="ghost"
            className="w-full text-white hover:bg-[#ff385c]"
          >
            Sign out
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <div>
            <p>Good Morning</p>
            <h1 className="text-2xl font-bold">Create a new course</h1>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="search"
              placeholder="Search"
              className="rounded-full px-4 py-2 bg-gray-200"
            />
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </header>

        <Tabs
          value={steps[currentStep].toLowerCase().replace(" ", "-")}
          className="space-y-4"
        >
          <TabsList className="grid grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <TabsTrigger
                key={step}
                value={step.toLowerCase().replace(" ", "-")}
                onClick={() => setCurrentStep(index)}
              >
                {step}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="basic-information">
            <BasicInformation />
          </TabsContent>

          <TabsContent value="advance-information">
            <AdvanceInformation />
          </TabsContent>

          <TabsContent value="curriculum">
            <Curriculum />
          </TabsContent>

          <TabsContent value="publish-course">
            <PublishCourse />
          </TabsContent>
        </Tabs>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-6">
          <Button onClick={handlePrevious} disabled={currentStep === 0}>
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            type="submit"
          >
            Next
          </Button>
        </div>
      </main>
    </div>
  );
}
