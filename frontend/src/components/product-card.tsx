"use client";
import Link from "next/link";
import { Rating } from "./rating";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CardContext";
import { useWishList } from "@/context/WishListContext";

export const ProductCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const { wishList, addToWishList, removeFromWishList } = useWishList();

  console.log(addToWishList);
  const [inWishList, setInWishList] = useState(false);
  const [inCart, setInCart] = useState(false);
  const { id, name, overview, poster, price, rating, best_seller } = product;

  useEffect(() => {
    const productInCart = cartList?.find((item) => item.id === product.id);

    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);

  useEffect(() => {
    const productInWishList = wishList.find((item) => item.id === product.id);

    if (productInWishList) {
      setInWishList(true);
    } else {
      setInWishList(false);
    }
  }, [wishList, product.id]);

  return (
    <div className="m-5 max-w-xs bg-blue-50 rounded-lg border border-gray shadow-md dark:bg-gray-800 dark:border-black">
      <p className="relative">
        {best_seller && (
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
            Best Seller
          </span>
        )}

        {!inWishList && (
          <button
            onClick={() => addToWishList(product)}
            className="inline-flex items-center text-sm font-small text-center text-black bg-green-100 rounded-lg hover:bg-blue-100 absolute top-4 right-2 border rounded p-1 pr-2"
          >
            <i className="ml-1 bi bi-suit-heart-fill"></i>
          </button>
        )}

        <img className="rounded-t-lg w-full h-64" src={poster} alt={name} />
      </p>

      <div className="p-5">
        <Link href={`/products/${id}`}>
          <h5 className="mb-2 text-2xl text-slate-900/80 hover:text-blue-500 hover:backdrop-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>

        <div className="flex items-center my-2">
          <Rating rating={rating} />
        </div>

        <p className="flex justify-between items-center">
          <span className="text-2xl font-bold dark:text-gray-200">
            <span>$</span>
            <span>{price}.00</span>
          </span>

          {!inCart && (
            <button
              onClick={() => addToCart(product)}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
            >
              Add Item <i className="ml-1 bi bi-bag-plus"></i>
            </button>
          )}
          {inCart && (
            <button
              onClick={() => removeFromCart(product)}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800"
            >
              Remove Item <i className="ml-1 bi bi-trash3"></i>
            </button>
          )}
        </p>
      </div>
    </div>
  );
};
