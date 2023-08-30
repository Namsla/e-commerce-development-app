"use client";
import { createContext, useContext, useReducer } from "react";
import { wishListReducer } from "../redux/WishListReducer";
import { useEffect } from "react";
import { getWishListLocal, setWishListLocal } from "@/utils/wishLocalStorage";

const wishListInitialState = getWishListLocal() || {
  wishList: [],
  total: 0,
};

const WishListContext = createContext(wishListInitialState);

export const WishListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishListReducer, wishListInitialState);

  useEffect(() => {
    if (!getWishListLocal()) {
      setWishListLocal(state);
    }
  }, [state]);

  function addToWishList(product) {
    const updatedList = state.wishList.concat(product);
    const updatedTotal = state.total + product.price;

    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: {
        products: updatedList,
        total: updatedTotal,
      },
    });
  }

  function removeFromWishList(product) {
    const updatedList = state.wishList.filter((item) => item.id !== product.id);
    const updatedTotal = state.total - product.price;

    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: {
        products: updatedList,
        total: updatedTotal,
      },
    });
  }

  function clearWishlist() {
    dispatch({
      type: "CLEAR_WISHLIST",
      payload: {
        products: [],
        total: 0,
      },
    });
  }

  const value = {
    wishList: state.wishList,
    total: state.total,
    addToWishList,
    removeFromWishList,
    clearWishlist,
  };

  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => {
  const context = useContext(WishListContext);
  return context;
};
