"use client";

import { useWishList } from "../../context/WishListContext";
import { WishListCard } from "../wishlist/wish-list-card";
import Link from "next/link";

export const WishList = () => {
  const { wishList, total } = useWishList();

  return (
    <div className="border-black rounded bg-white p-4 pt-1 pb-1">
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          <i className="bi bi-heart-fill"> </i> My Wish List({wishList.length})
          <i className="bi bi-heart-fill"> </i>
        </p>
      </section>
      <section>
        {wishList.map((product, index) => (
          <WishListCard key={index} product={product} />
        ))}
      </section>
      <Link href={`products`}>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <i className="mr-2 bi bi-bag-heart"></i>Continue Shopping
        </button>
      </Link>
      <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100"></div>
    </div>
  );
};
