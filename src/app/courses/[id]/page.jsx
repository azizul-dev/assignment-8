import Image from "next/image";

import { IoIosStar } from "react-icons/io";
import { IoTimeOutline, IoBarChartOutline, IoPeopleOutline, IoCheckmarkCircle, IoPlayCircleOutline } from "react-icons/io5";

const CoursesDetail = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://assignment-8-eta-two.vercel.app/data.json");
  const allCourses = await res.json();

  const course = allCourses.find(c => c.id == id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Course not found 😢</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      
      <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center ">

          
          <div className="space-y-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{course.category}</span>
            <h1 className="text-4xl font-bold">{course.title}</h1>
            <p className="text-green-50 text-sm">{course.description}</p>

            <div className="flex items-center gap-2">
              <IoIosStar className="text-yellow-300" />
              <span className="font-bold">{course.rating}</span>
              <span className="text-green-100 text-sm">({course.totalStudents.toLocaleString()} students)</span>
            </div>

            <div className="flex gap-5 text-sm text-green-100">
              <span className="flex items-center gap-1"><IoTimeOutline />{course.duration}</span>
              <span className="flex items-center gap-1"><IoBarChartOutline />{course.level}</span>
              <span className="flex items-center gap-1"><IoPeopleOutline />{course.totalStudents.toLocaleString()}+</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Image src={course.instructorImage} alt={course.instructor} width={40} height={40} className="rounded-full ring-2 ring-white/40" />
              <div>
                <p className="text-xs text-green-200">Instructor</p>
                <p className="text-sm font-semibold">{course.instructor}</p>
              </div>
            </div>
          </div>

          
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src={course.image} alt={course.title} fill className="object-cover" />
          </div>

        </div>
      </div>

      
      <div className="container mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">

        
        <div className="lg:col-span-2 space-y-6">

          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4">Course Curriculum</h2>
            <div className="space-y-2">
              {course.curriculum.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition cursor-pointer group">
                  <span className="w-7 h-7 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-xs font-bold shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <IoPlayCircleOutline className="text-gray-300 group-hover:text-green-500 transition" />
                  <p className="text-sm text-gray-700 group-hover:text-green-700 transition">{item}</p>
                </div>
              ))}
            </div>
          </div>

          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4">What You&apos;ll Learn</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {course.curriculum.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <IoCheckmarkCircle className="text-green-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>


          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4">Instructor</h2>
            <div className="flex items-center gap-4">
              <Image src={course.instructorImage} alt={course.instructor} width={70} height={70} className="rounded-2xl ring-4 ring-green-100" />
              <div>
                <h3 className="font-bold text-gray-800">{course.instructor}</h3>
                <p className="text-green-600 text-sm">{course.category} Expert</p>
                <p className="text-gray-400 text-xs mt-1">{course.totalStudents.toLocaleString()} students · {course.rating} rating</p>
              </div>
            </div>
          </div>

        </div>


        <div className="lg:col-span-1">
          <div className="sticky top-6 bg-white rounded-2xl shadow-lg border border-gray-100 p-5 space-y-4">

            <div className="relative h-40 rounded-xl overflow-hidden">
              <Image src={course.image} alt={course.title} fill className="object-cover" />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-extrabold">${course.price}</span>
              <span className="text-gray-400 line-through text-sm">${(course.price * 1.5).toFixed(2)}</span>
              <span className="bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full font-semibold">33% OFF</span>
            </div>

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold hover:opacity-90 transition">
              Enroll Now
            </button>

            <button className="w-full py-3 rounded-xl border-2 border-green-200 text-green-600 font-semibold hover:bg-green-50 transition text-sm">
              Try Free Preview
            </button>

            <ul className="space-y-2 text-sm text-gray-600 pt-2">
              <li>✅ {course.duration} on-demand video</li>
              <li>✅ Full lifetime access</li>
              <li>✅ Access on mobile & desktop</li>
              <li>✅ Certificate of completion</li>
              <li>✅ {course.curriculum.length} lessons</li>
            </ul>

            <p className="text-center text-xs text-gray-400 border-t pt-3">30-Day Money-Back Guarantee</p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CoursesDetail;