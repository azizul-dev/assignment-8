import { IoMdTrendingUp } from "react-icons/io";
import TopCoursesCart from "./TopCoursesCart";

const TrendingCourses = async () => {
  const res = await fetch("https://assignment-8-eta-two.vercel.app/data.json");
  const courses = await res.json();

  const trendingCourses = courses
    .filter((course) => course.isTrending === true)
    .slice(3);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-3">
        <IoMdTrendingUp className=" text-4xl text-red-600"/>
        Trending{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
          Courses
        </span>
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 container mx-auto">
        {trendingCourses.map((course) => (
          <TopCoursesCart key={course.id} topCart={course} />
        ))}
      </div>
    </div>
  );
};

export default TrendingCourses;
