import React from "react";
import Category from "./Category";
import "./Categories.css";

async function getData() {
  const res = await fetch(
    "https://api.mockfly.dev/mocks/963982e2-9c51-4eea-a32c-9516743e1a0b/home"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch categories data");
  }

  return res.json();
}

export default async function Categories() {
  const data = await getData();
  const { title, items } = data["cats"];
  return (
    <div className="flex flex-col space-y-5">
      <div className="text-center md:text-start">
        <h3 className="text-[40px] leading-[56px] text-[#1A202C] font-[700]">
          {title}
        </h3>
      </div>
      <div className="flex justify-between space-x-5 h-[128px] w-full overflow-x-scroll scroll-smooth snap-x scrollbar-hide">
        {items.map((item: { image: string; title: string }) => {
          return (
            <div className="flex-shrink-0 snap-center" key={title}>
              <Category item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
