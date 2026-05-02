"use client";
import TopCoursesCart from "@/components/TopCoursesCart";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const categories = ["All", "Development", "Design", "Marketing", "Data Science", "Security", "Finance"];

const CoursesPage = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();

 
  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setAllCourses(data));
  }, []);

  
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setSelected(cat);
  }, [searchParams]);

 
  const filtered = allCourses.filter(course => {
    const matchCategory = selected === "All" || course.category === selected;
    const matchSearch = course.title?.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="container mx-auto px-4 py-10">

    
      <div className="mb-8 text-center lg:text-left">
        <h1 className="text-3xl font-bold">All Courses</h1>
        <p className="text-gray-500">Explore all available courses and upgrade your skills</p>
      </div>

     
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              selected === cat
                ? "bg-green-500 text-white border-green-500"
                : "border-gray-300 hover:border-green-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

    
      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full max-w-sm px-4 py-2 rounded-full border border-gray-300 mb-8 outline-none focus:border-green-500"
      />

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map(course => (
            <TopCoursesCart key={course.id} topCart={course} />
          ))
        ) : (
          <p className="text-gray-400 col-span-3 text-center py-10">No courses found.</p>
        )}
      </div>

    </div>
  );
};

export default CoursesPage;