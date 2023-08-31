import { setWishListLocal } from "@/utils/wishLocalStorage";

export const wishListReducer = (state, action) => {
  const { type, payload } = action;
  setWishListLocal({
    ...state,
    wishList: payload.products,
    total: payload.total,
  });

  switch (type) {
    case "ADD_TO_WISHLIST": {
      return { ...state, wishList: payload.products, total: payload.total };
    }
    case "REMOVE_FROM_WISHLIST": {
      return { ...state, wishList: payload.products, total: payload.total };
    }
    case "CLEAR_WISHLIST": {
      return { ...state, wishList: payload.products, total: payload.total };
    }
    default:
      throw new Error("No case found!");
  }
};
