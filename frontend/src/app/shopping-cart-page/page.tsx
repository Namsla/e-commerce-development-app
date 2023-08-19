"use client";
import React from "react";
import { CartList } from "./cart-list";
import { CartEmpty } from "./card-empty";
import { CartProvider, useCart } from "@/context/CardContext";

export const CartPage = () => {
  const { cartList } = useCart();

  return (
    <CartProvider>
      <div className="h-screen">
        <div className="dark:bg-gray-800 flex flex-col items-center">
          <main>
            <CartList />
          </main>
        </div>
      </div>
    </CartProvider>
  );
};

export default CartPage;
