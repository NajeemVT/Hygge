import React from "react";
import Product from "./Product";

const ProductList = ({ products }: any) => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
        {products.map(
          (
            product: {
              image: string;
              title: string;
              cat: string;
              price: string;
            },
            index: number
          ) => {
            return <Product key={product.title} product={product} />;
          }
        )}
      </div>
      <div className="flex justify-center items-center self-center w-[165px] h-[64px] rounded-[32px]  bg-[#00CC96]  gap-[10]">
        <h4 className="text-[#F7FAFC] font-[700] text-center text-[20px] leading-[32px]">
          View All
        </h4>
      </div>
    </div>
  );
};

export default ProductList;
