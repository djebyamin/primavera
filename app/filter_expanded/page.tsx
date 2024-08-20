"use client";
import { SetStateAction, useState } from "react";
import Image from "next/image";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [searchTerm, setSearchTerm] = useState("");

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const courses = [
    {
      id: 1,
      title: "Course 1",
      lessons: "4 lessons (1h 13m)",
      image: "/course-1.jpg",
    },
    {
      id: 2,
      title: "Course 2",
      lessons: "6 lessons (2h 45m)",
      image: "/course-2.jpg",
    },
    // Add more courses as needed...
  ];

  const wishlist = [
    {
      id: 1,
      title: "The Ultimate Drawing Course - Beginner to Advanced",
      price: "$37.00",
      oldPrice: "$49.00",
      image: "/course-1.jpg",
      teacher: "Harry Potter & John Wick",
      rating: "4.6 (89,564 Reviews)",
    },
    {
      id: 2,
      title: "The Ultimate Drawing Course - Beginner to Advanced",
      price: "$37.00",
      oldPrice: "$49.00",
      image: "/course-1.jpg",
      teacher: "Harry Potter & John Wick",
      rating: "4.6 (89,564 Reviews)",
    },
    // Add more wishlist items as needed...
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-red-500 text-white p-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <span>Home</span>
            <span>▼ Library</span>
            <span>Path</span>
            <span>Courses</span>
            <span>▼ Resources</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>EN</span>
            <span>▼ Profile</span>
          </div>
        </div>
      </header>

      {/* Search bar */}
      <div className="bg-red-500 p-4">
        <div className="flex justify-between">
          <div className="bg-white rounded-lg flex items-center p-2 w-1/3">
            <span className="text-gray-400 mr-2">🔍</span>
            <input
              type="text"
              placeholder="Search all lessons"
              className="w-full outline-none"
              onChange={handleSearchChange}
            />
          </div>
          <div className="bg-white rounded-lg flex items-center p-2 w-1/3">
            <span className="text-gray-400 mr-2">🔍</span>
            <input
              type="text"
              placeholder="Project Management"
              className="w-full outline-none"
            />
          </div>
          <div className="flex items-center space-x-4 text-white">
            <span>🔔</span>
            <span>🛒</span>
            <button className="bg-white text-red-500 px-4 py-2 rounded-lg">
              Upgrade
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="p-8">
        {/* User profile */}
        <div className="bg-white rounded-lg shadow p-6 mb-8 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/profile-pic.jpg"
              alt="Kevin Gilbert"
              width={64}
              height={64}
              className="rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">Kevin Gilbert</h2>
              <p className="text-gray-500">
                Web Developer & Actor - Getting started
              </p>
            </div>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Update account
          </button>
        </div>

        {/* Navigation tabs */}
        <div className="flex space-x-4 mb-8">
          {[
            "Dashboard",
            "Courses",
            "Teachers",
            "Message",
            "Whishlist",
            "Purchase History",
            "Settings",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`font-bold ${
                activeTab === tab
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content based on active tab */}
        <div className="mt-4">
          {activeTab === "Whishlist" && (
            <div>
              {/* Wishlist section */}
              <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
              <div className="bg-white p-4 rounded-lg shadow">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="text-left">Course</th>
                      <th className="text-left">Prices</th>
                      <th className="text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlist.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-4">
                          <div className="flex items-center">
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={80}
                              height={60}
                              className="rounded-lg mr-4"
                            />
                            <div>
                              <h3 className="font-bold">{item.title}</h3>
                              <p className="text-gray-500">{item.teacher}</p>
                              <p className="text-gray-400 text-sm">
                                {item.rating}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          <span className="text-red-500 font-bold">
                            {item.price}
                          </span>{" "}
                          <span className="line-through text-gray-500">
                            {item.oldPrice}
                          </span>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center space-x-4">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                              Buy now
                            </button>
                            <button className="bg-white text-red-500 px-4 py-2 border rounded-lg">
                              Add to Cart
                            </button>
                            <span>❤️</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <button className="px-3 py-2 mx-1 bg-red-500 text-white rounded-full">
                  1
                </button>
                <button className="px-3 py-2 mx-1 text-gray-500 rounded-full">
                  2
                </button>
                <button className="px-3 py-2 mx-1 text-gray-500 rounded-full">
                  3
                </button>
                <button className="px-3 py-2 mx-1 text-gray-500 rounded-full">
                  4
                </button>
                <button className="px-3 py-2 mx-1 text-gray-500 rounded-full">
                  5
                </button>
              </div>
            </div>
          )}

          {/* Other tabs */}
          {activeTab === "Dashboard" && <div>Contenu du Dashboard</div>}
          {activeTab === "Courses" && (
            <div>
              {/* List of courses */}
              <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
              <div className="grid grid-cols-4 gap-4">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-lg shadow overflow-hidden"
                  >
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={300}
                      height={200}
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="font-bold mb-2">{course.title}</h3>
                      <p className="text-gray-500 mb-2">{course.lessons}</p>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg w-full">
                        Start course
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "Teachers" && <div>Teachers content</div>}
          {activeTab === "Message" && <div>Message content</div>}
          {activeTab === "Purchase History" && (
            <div>Purchase History content</div>
          )}
          {activeTab === "Settings" && <div>Settings content</div>}
        </div>
      </main>
    </div>
  );
}
