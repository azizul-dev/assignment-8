"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";


import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const handleRegisterFunction = async (formdata) => {
    const { email, name, photo, password } = formdata;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: photo,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
      return;
    }
    
      toast.success("Login Successful! Welcome back 🎉");
      setTimeout(() => {
        window.location.href = "/"; 
      }, 1500);
    
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8"
      style={{
        background:
          "linear-gradient(135deg, #0a1f0e 0%, #0f2d14 40%, #0a1f0e 100%)",
      }}
    >
      <div
        className="w-full max-w-md rounded-3xl p-10 relative overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "0.5px solid rgba(134,239,172,0.2)",
          backdropFilter: "blur(20px)",
        }}
      >
       
        <div className="flex items-center gap-3 mb-7">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
            style={{ background: "linear-gradient(135deg, #22c55e, #10b981)" }}
          >
            📚
          </div>
          <span
            className="text-xl font-bold text-green-50"
            style={{ fontFamily: "serif" }}
          >
            SkillSphere
          </span>
        </div>

        <h1
          className="text-2xl font-bold text-green-50 mb-1"
          style={{ fontFamily: "serif" }}
        >
          Create Account
        </h1>
        <p className="text-sm mb-7" style={{ color: "rgba(187,247,208,0.6)" }}>
          Join thousands of learners upgrading their skills
        </p>

       
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-sm font-medium transition-all mb-6"
          style={{
            border: "0.5px solid rgba(134,239,172,0.25)",
            background: "rgba(255,255,255,0.06)",
            color: "#bbf7d0",
          }}
        >
         
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

       
        <div className="flex items-center gap-3 mb-6">
          <div
            className="flex-1 h-px"
            style={{ background: "rgba(134,239,172,0.15)" }}
          ></div>
          <span className="text-xs" style={{ color: "rgba(187,247,208,0.4)" }}>
            or register with email
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "rgba(134,239,172,0.15)" }}
          ></div>
        </div>

      
        <form
          onSubmit={handleSubmit(handleRegisterFunction)}
          className="space-y-4"
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                className="block text-xs font-medium mb-1.5"
                style={{ color: "rgba(187,247,208,0.7)" }}
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-3.5 py-2.5 rounded-xl text-sm text-green-50 outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "0.5px solid rgba(134,239,172,0.2)",
                }}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-xs font-medium mb-1.5"
                style={{ color: "rgba(187,247,208,0.7)" }}
              >
                Photo URL
              </label>
              <input
                type="text"
                placeholder="https://..."
                className="w-full px-3.5 py-2.5 rounded-xl text-sm text-green-50 outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "0.5px solid rgba(134,239,172,0.2)",
                }}
                {...register("photo", { required: "Photo URL is required" })}
              />
              {errors.photo && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.photo.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              className="block text-xs font-medium mb-1.5"
              style={{ color: "rgba(187,247,208,0.7)" }}
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3.5 py-2.5 rounded-xl text-sm text-green-50 outline-none transition-all"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "0.5px solid rgba(134,239,172,0.2)",
              }}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-xs font-medium mb-1.5"
              style={{ color: "rgba(187,247,208,0.7)" }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Min. 8 characters"
              className="w-full px-3.5 py-2.5 rounded-xl text-sm text-green-50 outline-none transition-all"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "0.5px solid rgba(134,239,172,0.2)",
              }}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Min 8 characters" },
              })}
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              type="button"
              onClick={() => reset()}
              className="py-2.5 rounded-xl text-sm font-medium transition-all"
              style={{
                border: "0.5px solid rgba(134,239,172,0.25)",
                color: "rgba(187,247,208,0.7)",
                background: "transparent",
              }}
            >
              Reset
            </button>
            <button
              type="submit"
              className="py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
              style={{
                background: "linear-gradient(135deg, #22c55e, #10b981)",
              }}
            >
              Create Account →
            </button>
          </div>
        </form>

        <p
          className="text-center mt-5 text-xs"
          style={{ color: "rgba(187,247,208,0.5)" }}
        >
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-green-400 font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
