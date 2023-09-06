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

export default async function Banner() {
  const data = await getData();
  const { title, ctaLabel, image } = data["banner"];
  return (
    <div className="flex flex-col md:flex-row justify-center items-center relative w-full bg-[#F6F7FB] h-[600px] rounded-[64px]">
      <div className="flex flex-col space-y-10 absolute md:left-[36px] lg:left-[96px]">
        <div className="lg:h-[88px] w-[496px]">
          <p className=" h-[112px] md:text-[35px] lg:text-[40px] leading-[56px] font-[700] text-[#1A202C]">
            {title}
          </p>
        </div>
        <div className=" h-[48px] w-1/2 rounded-[32px] py-[12px] px-[24px] bg-[#00CC96]  gap-[10px]">
          <h4 className=" text-[#F7FAFC] font-[700] text-center text-[20px]">
            {ctaLabel}
          </h4>
        </div>
      </div>

      <Image
        src={image}
        height={576}
        width={768}
        alt="Hygge Logo"
        className="w-fit h-[300px] lg:h-[576px] absolute md:left-[356px] lg:left-[456px]"
      />
    </div>
  );
}
