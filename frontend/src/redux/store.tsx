import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productslice";

import cartReducer from "./features/cartslice";
import wishlistReducer from "./features/wishlistslice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
