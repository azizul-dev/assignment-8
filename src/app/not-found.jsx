'use client';

import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🌿 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-700"></div>

      {/* ✨ Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-emerald-500 opacity-20 blur-3xl rounded-full"></div>

      {/* 🚀 Content */}
      <div className="relative z-10 text-center px-6">

        {/* 404 Text */}
        <h1 className="text-[100px] md:text-[150px] font-extrabold text-white drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-green-100 mb-4">
          Oops! Page Not Found 😢
        </h2>

        {/* Description */}
        <p className="text-green-200 max-w-md mx-auto mb-8">
          The page you’re looking for doesn’t exist or has been moved.
          Don’t worry, you can go back to the homepage.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <Link href="/">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-green-600 text-white font-semibold shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-105 transition">
              ⬅ Back to Home
            </button>
          </Link>

          <Link href="/courses">
            <button className="px-6 py-3 rounded-xl border border-green-300 text-green-100 hover:bg-white/10 transition">
              Browse Courses
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;