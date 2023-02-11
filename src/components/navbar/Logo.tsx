import React from "react";
//@ts-ignore
import logo from "../../assets/images/clearmix.svg";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="w-80 h-full flex">
      <Image priority={true} src={logo} alt={""} className="p-0 w-20 bg m-0" />
      <p className=" font-outline text-3xl ">ClearMix</p>
    </div>
  );
};
