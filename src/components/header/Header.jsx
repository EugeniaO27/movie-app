import React from "react";
import MenuItem from "../menuItem/MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkMode from "../darkMode/DarkMode";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 max-w-6xl mx-auto font-bold">
      <div className="flex gap-5 text-3xl">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-5">
        <DarkMode />
        <Link href="/" className="flex gap-1 items-center">
          <span className="text-3xl bg-amber-500 py-1 px-2 rounded-lg">
            IMDb
          </span>
          <span className="text-2xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </header>
  );
}
