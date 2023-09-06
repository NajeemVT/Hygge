import Image from "next/image";
import React from "react";
import Logo from "@/app/assets/images/Logo.svg";
import SearchIcon from "@/app/assets/images/SearchIcon.svg";
import ProfileIcon from "@/app/assets/images/ProfileIcon.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center relative h-[48px] top-5 mx-10 ">
      <div className="w-[154px] h-[43px]">
        <Image
          src={Logo}
          height={154}
          width={43}
          alt="Hygge Logo"
          className="w-[154.14px] h-[42.88px]"
        />
      </div>
      <div className="flex items-center space-x-5">
        <div className="w-[24px] h-[24px]">
          <Image
            src={SearchIcon}
            height={24}
            width={24}
            alt="Search"
            className="w-[20px] h-[20px]"
          />
        </div>
        <div className="w-[24px] h-[24px]">
          <Image
            src={ProfileIcon}
            height={24}
            width={24}
            alt="Profile"
            className="w-[18px] h-[19px"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
