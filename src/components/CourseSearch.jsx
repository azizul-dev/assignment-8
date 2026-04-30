"use client";

import { useState, useMemo } from "react";
import TopCoursesCart from "@/components/TopCoursesCart";

const CourseSearch = ({ allCourses }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = useMemo(() => {
    if (searchQuery.length < 2) return [];
    return allCourses
      .filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 5);
  }, [searchQuery, allCourses]);

  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) return allCourses;
    return allCourses.filter(course =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allCourses]);

  return (
    <> 

      <div className="relative mb-6 max-w-[300px]">
    
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onFocus={() => setShowSuggestions(true)}

      
          placeholder="Search courses..." 


          className="w-full px-5 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
        />


        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-2xl mt-2 shadow-lg overflow-hidden">
            {suggestions.map(course => (
              <li
                key={course.id}
                onMouseDown={() => {
                  setSearchQuery(course.title);
                  setShowSuggestions(false);
                }}
                className="px-5 py-3 hover:bg-green-50 cursor-pointer text-sm text-gray-700"
              >
                🔍 {course.title}
              </li>
            ))}
          </ul>
        )}
      </div>


      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <TopCoursesCart key={course.id} topCart={course} />
          ))
        ) : (
          <p className="text-gray-400 col-span-3 text-center py-10">
            

            No courses found.


          </p>
        )}
      </div>
    </>
  );
};

export default CourseSearch;