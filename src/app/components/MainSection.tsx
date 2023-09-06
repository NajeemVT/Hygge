import React from "react";
import Categories from "./Categories";
import Products from "./Products";

const MainSection = () => {
  return (
    <div className="flex flex-col space-y-20 h-[2160px] rounded-[32px]">
      <Categories />
      <Products />
    </div>
  );
};

export default MainSection;
