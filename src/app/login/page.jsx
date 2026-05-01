import Link from "next/link";
import React from "react";

const LoginPage = () => {

    const handleLoginFunction = () =>{

    }

  return (
    <div className=" container mx-auto min-h-[90vh] flex justify-center items-center">
      <div className=" p-4 rounded-xl">
        <h2 className=" font-bold text-2xl text-center mb-6">
          Login Your Account
        </h2>
        <form onSubmit={handleLoginFunction} className=" space-y-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type here email"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Type here password"
            />
          </fieldset>
          <button className=" w-full px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-green-600 text-white font-semibold shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-105 transition">
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
