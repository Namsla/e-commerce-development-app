"use client";
import { useWishList } from "@/context/WishListContext";
import React from "react";
import { WishList } from "./wish-list";

export const WishListPage = () => {
  const { wishList } = useWishList();

  return (
    <>
      <div className="h-screen">
        <div className="dark:bg-gray-800 flex flex-col items-center mt-10">
          <main>
            <WishList />
          </main>
        </div>
      </div>
    </>
  );
};

export default WishListPage;
