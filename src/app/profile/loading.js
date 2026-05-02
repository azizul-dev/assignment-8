"use client";
import { CircleLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#07130c] to-[#0f2d14]">
      <CircleLoader color="#22c55e" size={60} />
    </div>
  );
}