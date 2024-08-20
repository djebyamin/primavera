
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { signOut } from "next-auth/react";
import { redirect } from 'next/navigation'
import { auth } from '../auth'

const steps = ['Basic Information', 'Advance Information', 'Curriculum', 'Publish Course']

export  default async function CreateCourse() {
  
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a1a1a] text-white p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold">Formation primavera</h2>
        </div>
        <nav>
          <ul className="space-y-2">
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li className="bg-[#ff385c] py-2 px-4 rounded"><Link href="/create-course">Create New Course</Link></li>
            <li><Link href="/my-courses">My Courses</Link></li>
            <li><Link href="/earning">Earning</Link></li>
            <li><Link href="/message">Message</Link></li>
            <li><Link href="/settings">Settings</Link></li>
          </ul>
          <Button 
      onClick={() => signOut({ callbackUrl: '/' })} 
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
            <input type="search" placeholder="Search" className="rounded-full px-4 py-2 bg-gray-200" />
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </header>

        <Tabs value={steps[currentStep].toLowerCase().replace(' ', '-')} className="space-y-4">
          <TabsList className="grid grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <TabsTrigger
                key={step}
                value={step.toLowerCase().replace(' ', '-')}
                disabled={index !== currentStep}
                className={`flex items-center space-x-2 ${index === currentStep ? 'text-blue-500' : 'text-gray-400'}`}
              >
                <div className={`w-6 h-6 rounded-full ${index === currentStep ? 'bg-blue-500 text-white' : 'border border-gray-400'} flex items-center justify-center`}>
                  {index + 1}
                </div>
                <span>{step}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="basic-information">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Basic Information</h2>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="Your course title" />
                    <p className="text-sm text-gray-500 mt-1">0/80</p>
                  </div>
                  <div>
                    <Label htmlFor="subtitle">Subtitle</Label>
                    <Input id="subtitle" placeholder="Your course subtitle" />
                    <p className="text-sm text-gray-500 mt-1">0/120</p>
                  </div>
                  <div>
                    <Label htmlFor="category">Course Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="finance">Finance & Accounting</SelectItem>
                        <SelectItem value="it">IT & Software</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        {/* Add more categories as needed */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="topic">Course Topic</Label>
                    <Input id="topic" placeholder="What is primarily taught in your course?" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="language">Course Language</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="french">French</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                          <SelectItem value="german">German</SelectItem>
                          {/* Add more languages as needed */}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="subtitle-language">Subtitle Language (Optional)</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="french">French</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                          <SelectItem value="german">German</SelectItem>
                          {/* Add more languages as needed */}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="level">Course Level</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                          <SelectItem value="all-levels">All Levels</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="duration">Duration</Label>
                      <div className="flex">
                        <Input id="duration" placeholder="Course duration" className="rounded-r-none" />
                        <Select>
                          <SelectTrigger className="w-[110px] rounded-l-none">
                            <SelectValue placeholder="Day" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="day">Day</SelectItem>
                            <SelectItem value="week">Week</SelectItem>
                            <SelectItem value="month">Month</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-6">
                    <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>Previous</Button>
                    <Button className="bg-[#ff385c]" onClick={handleNext}>Next</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other TabsContent components remain the same */}
        </Tabs>
      </main>
    </div>
  )
}