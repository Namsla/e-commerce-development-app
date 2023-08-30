"use client";
import Link from "next/link";
import { useWishList } from "../../context/WishListContext";

export const WishList = ({ product }) => {
  const { removeFromWishList } = useWishList();

  return (
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-5xl m-auto p-2 mb-5 h-screen">
      <div className="flex">
        <a href="">
          <img
            className="w-32 rounded"
            src={product?.poster}
            alt={product?.name}
          />
        </a>
        <div className="">
          <Link href={`products/${product?.id}`}>
            <p className="text-lg ml-2 dark:text-slate-200">{product?.name}</p>
          </Link>
          <button
            onClick={() => removeFromWishList(product)}
            className="text-base ml-2 text-red-400"
          >
            Remove From Wish List
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishList;
