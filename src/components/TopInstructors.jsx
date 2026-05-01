import Image from 'next/image';
import React from 'react';


const TopInstructors = async () => {
    const res = await fetch("https://assignment-8-eta-two.vercel.app/data.json");
  const courses = await res.json();
 
const instructors = courses

    .sort((a, b) => b.totalStudents - a.totalStudents) 
    .slice(0, 8) 
    .map(course => ({
      name: course.instructor,
      image: course.instructorImage,
      specialty: course.category,
      students: course.totalStudents,
      rating: course.rating,
      courses: 1,
    }));

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          🏆 Top <span className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">Instructors</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((inst, index) => (
            <div key={index} className="card bg-base-100 shadow-md border border-base-200 hover:shadow-xl transition-shadow text-center p-6">

              <div className="avatar mx-auto mb-4">
                <div className="w-20 h-20 rounded-full ring ring-emerald-400 ring-offset-2">
                  <Image
                    src={inst.image}
                    alt={inst.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

              <h3 className="font-bold text-lg">{inst.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{inst.specialty}</p>

          
              <div className="flex justify-center gap-4 text-sm">
                <div>
                  <p className="font-semibold">{inst.students.toLocaleString()}</p>
                  <p className="text-gray-400 text-xs">Students</p>
                </div>
                <div className="divider divider-horizontal m-0"></div>
                <div>
                  <p className="font-semibold text-yellow-400">★ {inst.rating}</p>
                  <p className="text-gray-400 text-xs">Rating</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;