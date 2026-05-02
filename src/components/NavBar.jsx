"use client";

import Image from "next/image";
import NavLink from "./NavLink";
import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const NavBar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = async () =>{
    await authClient.signOut();
  }

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  const links = (
    <>
      <li>
        <NavLink href="/" onClick={handleLinkClick}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink href="/courses" onClick={handleLinkClick}>
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink href="/profile" onClick={handleLinkClick}>
          Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 shadow-sm container mx-auto">
      <div className="navbar-start">
        <div className=" relative">
          <div
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {isOpen && (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-400 to-green-600">
            <Image src="/images/logo.svg" alt="logo" width={24} height={24} />
          </div>

          <Link href="/"><h1 className=" cursor-pointer hidden md:block text-2xl font-extrabold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
            SkillSphere
          </h1></Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {user ? (
        
        <div className="navbar-end gap-3 flex items-center">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-emerald-400 ring-offset-2">
              <Image
                src={
                  user.image ||
                  `https://ui-avatars.com/api/?name=${user.name}&background=22c55e&color=fff`
                }
                alt={user.name}
                width={40}
                height={40}
                className="rounded-full ring ring-emerald-400 ring-offset-2"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <button onClick={handleLogOut}
            className="px-6 py-3 cursor-pointer rounded-xl bg-gradient-to-r from-emerald-400 to-green-600 text-white font-semibold shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-105 transition"
          >
            LogOut
          </button>
        </div>
      ) : (
        
        <div className="navbar-end gap-3">
          <Link href="/login">
            <button className="px-6 py-3 cursor-pointer rounded-xl bg-gradient-to-r from-emerald-400 to-green-600 text-white font-semibold shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-105 transition">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
