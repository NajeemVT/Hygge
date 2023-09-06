import React from "react";
import Image from "next/image";

async function getData() {
  const res = await fetch(
    "https://api.mockfly.dev/mocks/963982e2-9c51-4eea-a32c-9516743e1a0b/home"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch banner data");
  }

  return res.json();
}

export default async function BannerMobile() {
  const data = await getData();
  const { title, ctaLabel, image } = data["banner"];
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <div className="flex flex-col space-y-5 justify-center items-start">
        <p className="text-[32px] leading-[48px] font-[700] text-[#1A202C]">
          {title}
        </p>

        <div className=" h-[48px] w-fit rounded-[32px] py-[12px] px-[24px] bg-[#00CC96]  gap-[10px]">
          <h4 className=" text-[#F7FAFC] font-[700] text-center text-[16px]">
            {ctaLabel}
          </h4>
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-[#F6F7FB] h-fit rounded-[24px]">
        <Image
          src={image}
          height={576}
          width={768}
          alt="Hygge Logo"
          className="w-fit h-fit"
        />
      </div>
    </div>
  );
}
