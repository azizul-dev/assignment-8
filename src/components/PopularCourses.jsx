
import TopCoursesCart from './TopCoursesCart';

const PopularCourses = async () => {
  const res = await fetch('https://assignment-8-eta-two.vercel.app/data.json');
  const courses = await res.json();

  const topCourses = courses
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className=' container mx-auto py-10'>
        <h2 className=' font-bold text-3xl text-center md:text-left'>Top Courses</h2>
        <div className="grid md:grid-cols-3 gap-6 py-5">
            {topCourses.map(tc => 
                <TopCoursesCart key={tc.id} topCart={tc}/>
            )}
        </div>
    </div>
  );
};

export default PopularCourses;