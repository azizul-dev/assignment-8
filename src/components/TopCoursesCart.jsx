import Image from "next/image";
import React from "react";
import { IoIosStar } from "react-icons/io";

const TopCoursesCart = ({ topCart }) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-2xl transition duration-300 group">

  
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={topCart.image}
          alt={topCart.title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

    
        {topCart.isTrending && (
          <span className=" animate-pulse absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">
            🔥 Trending
          </span>
        )}

        {topCart.isNew && (
          <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full shadow">
            New
          </span>
        )}
      </div>


      <div className="p-4 space-y-3">

       
        <h2 className="font-bold text-lg line-clamp-2 group-hover:text-green-400 transition">
          {topCart.title}
        </h2>

  
        <div className="flex items-center gap-2">
          <Image
            src={topCart.instructorImage}
            alt={topCart.instructor}
            width={30}
            height={30}
            className="rounded-full"
          />
          <p className="text-sm text-gray-400">{topCart.instructor}</p>
        </div>


        <div className="flex items-center gap-2">
          <IoIosStar className="text-amber-400 text-lg" />
          <span className="font-semibold text-green-400">
            {topCart.rating}
          </span>
          <span className="text-xs text-gray-400">
            ({topCart.totalStudents}+ students)
          </span>
        </div>


        <div className="flex justify-between text-xs text-gray-400">
          <span>{topCart.duration}</span>
          <span>{topCart.level}</span>
        </div>


        <div className="flex items-center justify-between pt-2">
          <p className="text-lg font-bold text-white">
            ${topCart.price}
          </p>

          <button className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-emerald-400 to-green-600 text-white hover:scale-105 transition">
            View
          </button>
        </div>

      </div>
    </div>
  );
};

export default TopCoursesCart;