import Banner from "@/components/Banner";
import LearningTips from "@/components/LearningTips";
import PopularCourses from "@/components/PopularCourses";
import TopInstructors from "@/components/TopInstructors";
import TrendingCourses from "@/components/TrendingCourses";

export default function Home() {
  return (
    <div>
      <Banner/>
      <PopularCourses/>
     <TrendingCourses/>
     <LearningTips/>
     <TopInstructors/>
    </div>
  );
}
