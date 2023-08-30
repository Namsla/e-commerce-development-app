"use client";
import React from "react";
import { CartList } from "./cart-list";
import { CartEmpty } from "./card-empty";
import { CartProvider, useCart } from "@/context/CardContext";

export const CartPage = () => {
  const { cartList } = useCart();

  return (
    <>
      <div className="h-screen">
        <div className="dark:bg-gray-800 flex flex-col items-center mt-10">
          <main>
            <CartList />
          </main>
        </div>
      </div>
    </>
  );
};

export default CartPage;
