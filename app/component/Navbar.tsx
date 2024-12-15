// src/components/Navbar.tsx
"use client";
import React, { useState, Suspense } from "react";
import Link from "next/link";
import { FaPen, FaSearch, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname(); // Get the current route path
  const { replace } = useRouter(); // Next js function to replace routes

  // Handle search query submission
  const handleSearchSubmit = () => {
    const params = searchParams ? new URLSearchParams(searchParams.toString()) : new URLSearchParams();
    if (searchQuery) params.set("search", searchQuery);
    else params.delete("search");
    // Always routes with the search query
    replace(`/?${params.toString()}`);
    setSearchOpen(false); // Close search bar after submission
  };

  return (
    <div className="max-w-screen-lg mx-auto sticky top-0 bg-inherit py-3 sm:py-6 z-50  ">
      <nav className="flex justify-between items-center mb-2 p-4 ">
        <div className="flex items-center gap-4">
        <Link href="/">
      <h1 className="relative group font-bold text-xl text-tennessee-orange font-jet-brains flex items-center">
        FRANQ.BLOG
        {/* Hidden Image that appears on hover */}
        <div className="fixed w-28 h-28 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Image
            src="/images/frankcampos.png"
            alt="Hover Icon"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </h1>
    </Link>
          <button
            onClick={() => setSearchOpen((prev) => !prev)}
            className="text-xl text-white hover:text-tennessee-orange transition-colors"
          >
            {searchOpen ? <FaTimes /> : <FaSearch />}
          </button>

          {/* Search Box (toggles visibility) */}
          {searchOpen && (
            <div className="ml-4 flex items-center gap-2">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posts..."
                defaultValue={searchParams ? searchParams.get("search")?.toString() : ""}
                className="bg-gray-800 appearance-none placeholder:text-sm placeholder:font-normal text-sm text-white placeholder-gray-400 border-b-2 border-purple-500 focus:border-purple-300 outline-none px-2 py-1 rounded-md"
              />
              <button
                onClick={handleSearchSubmit}
                className="text-tennessee-orange text-sm hover:text-tennessee-orange text-white px-2 py-1 rounded-md transition-colors"
              >
                Search
              </button>
            </div>
          )}
        </div>

        <ul className="flex items-center gap-6 font-medium transition-colors font-jet-brains">
          <li
            className={
              pathname === "/"
                ? "text-tennessee-orange hover:text-white"
                : "text-tennessee-orange hover:text-white"
            }
          >
            <Link href="/">Blogs</Link>
          </li>
          <li
            className={
              pathname === "/"
            ? 'text-white hover:text-tennessee-orange'
            : 'text-white hover:text-tennessee-orange'
          }
          >
            <Link href="/">About Me</Link>
          </li>
          <li
            className={
              pathname === "/write"
                ? "text-tennessee-orange hover:text-white"
                : "text-tennessee-orange hover:text-white"
            }
          >
            <Link href="/write">
              <FaPen className="hover:text-white" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const NavbarWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Navbar />
  </Suspense>
);
export default NavbarWrapper;