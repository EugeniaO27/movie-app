import React from "react";
import NavbarItem from "../navbarItem/NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center gap-7 bg-amber-100 dark:bg-gray-600 p-4 lg:text-lg">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
