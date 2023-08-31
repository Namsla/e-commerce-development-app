export const getWishListLocal = () => {
  return JSON.parse(localStorage.getItem("wishlist"));
};

export const setWishListLocal = (data: any) => {
  return localStorage.setItem("wishlist", JSON.stringify(data));
};
