"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Search from "./search";

function Header1() {
  const router = useRouter();
  const [searchSection, setSearchSection] = useState(false);
  const HandleLogout = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    localStorage.removeItem("session-token");
    router.push("/signin");
  };
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-b from-red-200 to-orange-100/50 backdrop-blur-sm px-3 ">
      <nav className="  px-2 px-5 text-lg">
        <div className="flex justify-between">
          <Link
            href="/"
            className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg text-lg font-bold"
          >
            <div className="flex">
              <div className="text-7xl">B</div>
              <div>
                <div className="pt-2 pl-2">uy</div>
                <div>ooks</div>
              </div>
            </div>
          </Link>
        </div>
        {searchSection && <Search setSearchSection={setSearchSection} />}
        <div
          onClick={() => setSearchSection(!searchSection)}
          className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative pl-16"
        ></div>

        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center font-bold gap-6">
            <Link
              href="/blog"
              className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative"
            >
              Products
            </Link>
            <Link
              href="/blog"
              className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative"
            >
              Category
            </Link>
            <Link
              href="/blog"
              className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative"
            >
              Why Buy Books
            </Link>

            <Link
              href="/blog"
              className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative"
            >
              Pricing
            </Link>

            <Link
              href="/blog"
              className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative"
            >
              Resources
            </Link>

            <Link
              href="/blog"
              className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative"
            >
              Shop
            </Link>

            <Link
              href="/blog"
              className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </Link>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center font-bold gap-6">
              <FaSearch />
              <div className="hidden text-sm text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                Search
              </div>
            </div>
            <p className="text-slate-900/80  hover:backdrop-lg px-3">|</p>
            <Link
              href="/signin"
              className="text-slate-900/80 text-xl hover:text-blue-500 hover:backdrop-lg group relative"
              onClick={HandleLogout}
            >
              <FaSignOutAlt />
              <div className="hidden text-sm  text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                Sign Out
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header1;
