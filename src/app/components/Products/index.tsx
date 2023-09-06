import React from "react";
import ProductList from "./ProductList";

async function getData() {
  const res = await fetch(
    "https://api.mockfly.dev/mocks/963982e2-9c51-4eea-a32c-9516743e1a0b/home"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch products data");
  }

  return res.json();
}

export default async function Products() {
  const data = await getData();

  const products = data["products"];
  return (
    <div className="flex flex-col space-y-5">
      <div className="text-center md:text-start">
        <h3 className="text-[40px] leading-[56px] text-[#1A202C] font-[700]">
          New Arrivals
        </h3>
      </div>
      <ProductList products={products} />
    </div>
  );
}
