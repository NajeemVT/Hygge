import React from "react";
import Image from "next/image";

type TProduct = {
  image: string;
  title: string;
  cat: string;
  price: string;
};

type TProps = {
  product: TProduct;
};
export default function Product({ product }: TProps) {
  return (
    <div className="flex flex-col justify-center items-start space-y-5 h-[404px] rounded-[24px]">
      <div className="flex justify-center items-center w-full h-[276pxpx] rounded-[48px] bg-[#F6F7FB]">
        <Image
          src={product.image}
          height={24}
          width={24}
          alt="Profile"
          className="w-[25px] h-[276px]"
        />
      </div>
      <div className="flex flex-col justify-center items-start space-y-2 h-[96px]">
        <div className="h-[40px] ">
          <p className="font-[600] text-[24px] leading-[40px] text-[#1A202C]">
            {product.title}
          </p>
        </div>
        <div className="h-[40px] flex items-center gap-[8px]">
          <div
            className={`bg-[#FFC1231A] w-fit h-[40px] py-[8px] px-[16px] rounded-[24px]`}
          >
            <div className="h-[24px] w-fit">
              <p
                className={`font-[700] size-[14px] leading-[24px] text-center text-[#FFC123]`}
              >
                {product.cat}
              </p>
            </div>
          </div>
          <div className="w-fit h-[32px]">
            <p className="text-[#1A202C] font-[600] text-[20px] leading-[32px] text-center">
              {product.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
