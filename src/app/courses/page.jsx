import TopCoursesCart from "@/components/TopCoursesCart";
import React from "react";

const CoursesPage = async () => {
  const res = await fetch("https://assignment-8-eta-two.vercel.app/data.json");
  const allCourses = await res.json();
  return <div className="container mx-auto px-4 py-10">


      <div className="mb-8">
        <h1 className="text-3xl font-bold">All Courses</h1>
        <p className="text-gray-500">
          Explore all available courses and upgrade your skills
        </p>
      </div>


      <div className="flex gap-3 mb-6 py-5">
        <button className="px-4 py-2 rounded-full bg-green-500 text-white">
          All
        </button>
        <button className="px-4 py-2 rounded-full border">
          Development
        </button>
        <button className="px-4 py-2 rounded-full border">
          Design
        </button>
      </div>


      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {allCourses.map(course => (
          <TopCoursesCart key={course.id} topCart={course} />
        ))}
      </div>

    </div>
};

export default CoursesPage;
