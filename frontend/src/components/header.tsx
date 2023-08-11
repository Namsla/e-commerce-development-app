"use client";
import Link from "next/link";
import React from "react";
import { FaSignInAlt } from "react-icons/fa";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white px-4 ">
      <nav className="  px-2 px-5 text-lg">
        <div className="flex justify-between">
          <div>
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
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center font-bold gap-6">
              <Link
                href="/products"
                className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative"
              >
                Products
              </Link>
              <Link
                href="/category"
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
                href="/"
                className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative"
              >
                Pricing
              </Link>

              <Link
                href="/"
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
                href="/cart"
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

            <Link
              href="/signin"
              className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative pl-16"
            >
              <p className="text-slate-900/80  hover:backdrop-lg px-3 font-bold">
                Sign In
              </p>
            </Link>
            <p className="text-slate-900/80  hover:backdrop-lg px-3">|</p>
            <Link
              href="/signin"
              className="text-slate-900/80 text-xl hover:text-blue-500 hover:backdrop-lg group relative"
            >
              <FaSignInAlt />
              <div className="hidden text-xs p-2 text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                Sign In
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
