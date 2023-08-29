"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/product-card";

export const ProductsList = () => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const search = window.location.search;
  const searchTerm = new URLSearchParams(search).get("q");

  useEffect(() => {
    async function fetchProducts() {
      console.log(searchTerm);
      const response = await fetch(
        `http://localhost:4000/products?name_like=${
          searchTerm ? searchTerm : ""
        }`
      );
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, [searchTerm, window.location]);
  return (
    <>
        <div className="dark:bg-gray-800 dark:border-gray-700 px-4">
          <section>
            <div className="pt-5 flex justify-between pl-5">
              <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
                All eBooks({products.length})
              </span>
            </div>

            <div className="flex flex-wrap justify-center lg:flex-row">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
    </>
  );
};

export default ProductsList;
