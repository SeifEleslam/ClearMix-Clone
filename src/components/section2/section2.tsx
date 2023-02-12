import React from "react";
import Image, { StaticImageData } from "next/image";
import dell from "../../assets/images/dell.png";
import google from "../../assets/images/google.png";
import emi from "../../assets/images/emi.png";
import brex from "../../assets/images/brex.png";
import cornell from "../../assets/images/cornell.png";
import flow from "../../assets/images/flow.png";
import shifts from "../../assets/images/shifts.png";
import jaffe from "../../assets/images/jaffe.png";
import kron from "../../assets/images/kron.png";
import qomplx from "../../assets/images/qomplx.png";

export const Section2 = () => {
  const images = [
    google,
    dell,
    brex,
    cornell,
    shifts,
    kron,
    qomplx,
    flow,
    jaffe,
    emi,
  ];
  return (
    <div className="relative text-center mx-auto p-6 mt-20 z-20 max-w-[85rem] ">
      <p className="text-txprim tracking-[1.5vw]">
        WIDELY USED BY PROFESSTIONALS
      </p>
      <h2 className="md:text-5xl textgrd xl:text-8xl lg:text-7xl text-4xl">
        TRUSTED BY TEAMS AT
      </h2>
      <div className="flex bg-prim/[.1] shadow-2xl flex-wrap items-center md:pb-10 md:px-5  pb-10 justify-center space-y-10 md:rounded-full rounded-2xl mt-10">
        <div></div>
        {images.map((val, i) => {
          return <TrustedComp key={i} src={val} />;
        })}
      </div>
    </div>
  );
};

export const TrustedComp = ({ src }: { src: StaticImageData }) => {
  return (
    <div className="w-[50%] md:w-auto px-6 lg:px-10">
      <Image src={src} alt={""} className=" h-fit w-[10rem] mx-auto " />
    </div>
  );
};
