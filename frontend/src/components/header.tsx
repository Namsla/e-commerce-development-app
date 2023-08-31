"use client";
import Link from "next/link";
import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useState } from "react";
import DroppedDownList from "./weblayout/drop-down-list";
import { FaSearch } from "react-icons/fa";
import { Search } from "./search-bar";
import { useCart } from "@/context/CardContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useWishList } from "@/context/WishListContext";

function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [searchSection, setSearchSection] = useState(false);
  const { cartList } = useCart();
  const { wishList } = useWishList();

  return (
    <div className="sticky top-0 z-50 bg-blue-200 px-4 ">
      <nav className="px-2 px-5 text-lg">
        <div className="flex justify-between gap-5px">
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

          <div className="flex justify-between items-center relative">
            <div className="flex justify-between items-center font-bold gap-7 mr-7">
              <Link
                href="/products"
                className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative"
              >
                Products
              </Link>
              <span
                onClick={() => setDropdown(!dropdown)}
                className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group"
              >
                Category
                <i className="bi bi-caret-down-fill absolute">
                  {dropdown && <DroppedDownList />}
                </i>
              </span>
              <Link
                href="/"
                className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg group relative"
              >
                Why Buy Books
              </Link>

              <Link
                href="/wishlist"
                className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg mr-5 group relative"
              >
                Wish List
                <span className="pl-1 pr-1 text-2xl bi bi-suit-heart-fill relative">
                  <span className="text-white text-sm absolute -top-1.5 left-5.5 bg-green-500 px-1 rounded-full ">
                    {wishList.length}{" "}
                  </span>
                </span>
              </Link>

              <Link
                href="/shopping-cart-page"
                className="text-gray-700 dark:text-white mr-5 group relative"
              >
                <span className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg text-2xl bi bi-cart-fill relative">
                  <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                    {cartList?.length}
                  </span>
                </span>
              </Link>
              {searchSection && <Search setSearchSection={setSearchSection} />}
            </div>
            <div className="flex justify-between p-1 pt-1 ml-5">
              <span className="text-slate-900/80  hover:backdrop-lg px-3 font-bold ">
                <FaSearch onClick={() => setSearchSection(!searchSection)} />
              </span>
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
        </div>
      </nav>
    </div>
  );
}

export default Header;
