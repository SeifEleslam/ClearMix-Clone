import React from "react";
//@ts-ignore
import logo from "../../assets/images/clearmix.svg";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="w-fit h-full flex items-center">
      <Image priority={true} src={logo} alt={""} className="p-0 w-14 bg m-0" />
      <p className=" font-bold text-4xl logogrd">ClearMix</p>
    </div>
  );
};
