"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegisterFunction = async (formdata) => {
    console.log(formdata);
    const { email, name, photo, password } = formdata;
    // e.preventDefault();
    // const email = e.target.email.value
    // const password = e.target.password.value

    const { data, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });
    if (error) {
      alert(error.message);
    }
    if (data) {
      alert("Signup Successful");
    }
  };

  return (
    <div className=" container mx-auto min-h-[90vh] flex justify-center items-center">
      <div className=" p-4 rounded-xl">
        <h2 className=" font-bold text-2xl text-center mb-6">
          Register Your Account
        </h2>
        <form
          onSubmit={handleSubmit(handleRegisterFunction)}
          className=" space-y-4"
        >
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here name"
              {...register("name", { required: "Name field is required" })}
            />
            {errors.name && (
              <p className=" text-red-500">{errors.name.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type here email"
              {...register("email", {
                required: "Email field is required",
              })}
            />
            {errors.email && (
              <p className=" text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here photo url"
              {...register("photo", {
                required: "Photo URL field is required",
              })}
            />
            {errors.photo && (
              <p className=" text-red-500">{errors.photo.message}</p>
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
