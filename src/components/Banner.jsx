'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Upgrade Your Skills Today 🚀",
      subtitle:
        "Learn from industry experts and build real-world projects to boost your career.",
      image: "/images/hero.png",
    },
    {
      id: 2,
      title: "Learn Anytime, Anywhere 🌍",
      subtitle:
        "Access courses from anywhere and level up your career at your own pace.",
      image: "/images/hero2.png",
    },
    {
      id: 3,
      title: "Build Real Projects 💻",
      subtitle:
        "Gain hands-on experience by building real-world applications.",
      image: "/images/hero3.png",
    },
  ];

  return (
    <div className="relative overflow-hidden">

      {/* 🔥 BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-700"></div>

      {/* 🔥 BLUR GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-green-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-emerald-500 opacity-20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 py-16">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col md:flex-row items-center justify-between container mx-auto px-6 gap-12">

                {/* LEFT CONTENT */}
                <div className="md:w-1/2 space-y-6 text-center md:text-left">

                  <p className="inline-block bg-white/10 text-green-200 px-4 py-1 rounded-full text-sm backdrop-blur">
                    🚀 Learn Anytime, Anywhere
                  </p>

                  <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-green-100 text-lg max-w-md mx-auto md:mx-0">
                    {slide.subtitle}
                  </p>

                  <div className="flex gap-4 justify-center md:justify-start">

                    {/* PRIMARY BUTTON */}
                    <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-green-600 text-white font-semibold shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-105 transition">
                      Browse Courses
                    </button>

                    {/* SECONDARY BUTTON */}
                    <button className="px-6 py-3 rounded-xl border border-green-300 text-green-100 hover:bg-white/10 transition">
                      Get Started
                    </button>

                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="md:w-1/2 flex justify-center">
                  <Image
                    src={slide.image}
                    alt="hero"
                    width={450}
                    height={450}
                    className="rounded-2xl shadow-[0_20px_60px_rgba(34,197,94,0.3)]"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;