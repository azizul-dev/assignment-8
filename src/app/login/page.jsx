"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLoginFunction = async (formData) => {
    console.log(formData);
    // e.preventDefault();
    // const email = e.target.email.value
    // const password = e.target.password.value

    const { data, error } = await authClient.signIn.email({
      email: formData.email, // required
      password: formData.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
  };

  return (
    <div className=" container mx-auto min-h-[90vh] flex justify-center items-center">
      <div className=" p-4 rounded-xl">
        <h2 className=" font-bold text-2xl text-center mb-6">
          Login Your Account
        </h2>
        <form
          onSubmit={handleSubmit(handleLoginFunction)}
          className=" space-y-4"
        >
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type here email"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <p className=" text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Type here password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            {errors.password && (
              <p className=" text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button className=" cursor-pointer w-full px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-green-600 text-white font-semibold shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-105 transition">
            Login
          </button>
        </form>
        <p className=" mt-4">
          Do not have an account?{" "}
          <Link className=" text-blue-500" href="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
