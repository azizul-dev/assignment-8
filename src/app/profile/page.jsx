"use client";

import { authClient } from "@/lib/auth-client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { format } from "date-fns";
import UpdateProfile from "@/components/UpdateProfile";


const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const handleLogOut = async () => {
    await authClient.signOut();
  };

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#07130c] to-[#0f2d14]">
        <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) return null;

  const initials =
    user.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "U";

  const memberSince = user?.createdAt
    ? format(new Date(user.createdAt), "MMMM yyyy")
    : "Recently Joined";

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-[#07130c] via-[#0f2d14] to-[#07130c]">
      <div className="max-w-3xl mx-auto">
      
        <div className="flex items-center gap-6 p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-green-400/20 shadow-lg">
       
          {user.image ? (
            <div className="relative w-20 h-20">
              <Image
                src={user.image}
                alt={user.name}
                fill
                className="rounded-full object-cover border-2 border-green-400"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-green-600 text-white text-2xl font-bold">
              {initials}
            </div>
          )}

        
          <div>
            <h1 className="text-2xl font-bold text-white">{user.name}</h1>
            <p className="text-green-200/70 text-sm">{user.email}</p>

            <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-green-400/10 text-green-300 border border-green-400/30">
              Active Student
            </span>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {[
            { num: "4", label: "Courses" },
            { num: "12", label: "Hours" },
            { num: "2", label: "Completed" },
          ].map((s, i) => (
            <div
              key={i}
              className="text-center p-5 rounded-2xl bg-white/5 border border-green-400/10 hover:scale-105 transition"
            >
              <h2 className="text-2xl font-bold text-green-400">{s.num}</h2>
              <p className="text-xs text-green-200/60 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        
        <div className="mt-6 p-6 rounded-2xl bg-white/5 border border-green-400/20">
          <h3 className="text-xs uppercase tracking-widest text-green-200/50 mb-4">
            Account Info
          </h3>

          {[
            { label: "Full Name", value: user.name || "Not set" },
            { label: "Email", value: user.email },
            { label: "Member Since", value: memberSince },
            {
              label: "Login Method",
              value:
                user.accounts?.[0]?.provider === "google"
                  ? "Google"
                  : "Email & Password",
            },
          ].map((row, i) => (
            <div
              key={i}
              className="flex justify-between py-2 border-b border-green-400/10 last:border-none"
            >
              <span className="text-green-200/60 text-sm">{row.label}</span>
              <span className="text-green-100 text-sm font-medium">
                {row.value}
              </span>
            </div>
          ))}
        </div>

       
        <div className="mt-6 p-6 rounded-2xl bg-white/5 border border-green-400/20">
          <h3 className="text-xs uppercase tracking-widest text-green-200/50 mb-4">
            Actions
          </h3>

          
          

          <button
            onClick={handleLogOut}
            className="w-full py-3 rounded-xl border border-red-400/30 bg-red-400/10 text-red-300 hover:bg-red-400/20 transition"
          >
            Logout
          </button>
          <UpdateProfile/>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
