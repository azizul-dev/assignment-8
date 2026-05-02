import CourseSearch from "@/components/CourseSearch";
import TopCoursesCart from "@/components/TopCoursesCart";
import React from "react";

const CoursesPage = async () => {
  const res = await fetch("https://assignment-8-eta-two.vercel.app/data.json");
  const allCourses = await res.json();
  return <div className="container mx-auto px-4 py-10">

      <CourseSearch allCourses={allCourses} />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {allCourses.map(course => (
          <TopCoursesCart key={course.id} topCart={course} />
        ))}
      </div>

    </div>
};

export default CoursesPage;
