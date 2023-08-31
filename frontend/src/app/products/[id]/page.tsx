"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Rating } from "@/components/rating";
import { CartProvider, useCart } from "@/context/CardContext";
import { WishListProvider, useWishList } from "@/context/WishListContext";

export const ProductDetail = () => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [inCart, setInCart] = useState(false);
  const { wishList, addToWishList, removeFromWishList } = useWishList();
  const [inWishList, setInWishList] = useState(false);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`http://localhost:4000/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    }
    fetchProducts();
  }, [id]);

  return (
    <>
      <CartProvider>
        <WishListProvider>
          <main className="h-screen">
            <section className="bg-blue-50 border rounded m-10 ml-20 mr-20 p-5 opacity-0.99">
              <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
                {product.name}
              </h1>
              <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
                {product.overview}
              </p>
              <div className="flex flex-wrap justify-around">
                <div className="max-w-xl my-3">
                  <img
                    className="rounded"
                    src={product.poster}
                    alt={product.name}
                  />
                </div>
                <div className="max-w-xl my-3">
                  <p className="text-3xl font5-bold text-gray-900 dark:text-slate-200">
                    <span className="mr-1 font-bold">$</span>
                    <span className="font-bold">{product.price}.00</span>
                  </p>
                  <p className="my-3">
                    <span>
                      <Rating rating={product.rating} />
                    </span>
                  </p>
                  <p className="my-4 select-none">
                    {product.best_seller && (
                      <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                        BEST SELLER
                      </span>
                    )}
                    {product.in_stock && (
                      <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                        INSTOCK
                      </span>
                    )}
                    {!product.in_stock && (
                      <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                        OUT OF STOCK
                      </span>
                    )}
                    <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                      {product.size} MB
                    </span>

                    <p>
                      {!inWishList && (
                        <button
                          onClick={() => addToWishList(product)}
                          className="inline-flex items-center text-sm font-small text-center text-black bg-green-100 rounded-lg hover:bg-blue-100 absolute top-4 right-2 border rounded p-1 pr-2"
                        >
                          <i className="ml-1 bi bi-suit-heart-fill"></i>
                        </button>
                      )}
                    </p>
                  </p>
                  <p className="my-3">
                    {!inCart && (
                      <button
                        onClick={() => addToCart(product)}
                        className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800`}
                      >
                        Add Item <i className="ml-1 bi bi-bag-plus"></i>
                      </button>
                    )}
                    {inCart && (
                      <button
                        onClick={() => removeFromCart(product)}
                        className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}
                        disabled={product.in_stock ? "" : "disabled"}
                      >
                        Remove Item <i className="ml-1 bi bi-trash3"></i>
                      </button>
                    )}
                  </p>
                  <p className="text-lg text-gray-900 dark:text-slate-200">
                    {product.long_description}
                  </p>
                </div>
              </div>
            </section>
          </main>
        </WishListProvider>
      </CartProvider>
    </>
  );
};

export default ProductDetail;
