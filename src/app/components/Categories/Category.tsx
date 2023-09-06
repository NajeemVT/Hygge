import React from "react";
import Image from "next/image";

type TItem = {
  image: string;
  title: string;
};

type TProps = {
  item: TItem;
};
export default function Category({ item }: TProps) {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 w-[128px] h-full rounded-[24px] bg-[#F6F7FB]">
      <div className="w-[32px] h-[32px]">
        <Image
          src={item.image}
          height={24}
          width={24}
          alt="Profile"
          className="w-[25px] h-[28px]"
        />
      </div>
      <div className="h-[24px]">
        <p className="font-[600] text-[16px] leading-[24px]">{item.title}</p>
      </div>
    </div>
  );
}
