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
    <div className="relative text-center p-6 mt-10 z-20">
      <h2 className="md:text-5xl textgrd xl:text-8xl lg:text-7xl text-4xl">
        TRUSTED BY TEAMS AT
      </h2>
      <div className="flex flex-wrap items-center justify-center space-y-20 mt-10">
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
    <div className="w-[50%] md:w-[33%] lg:w-fit px-2 lg:px-6">
      <Image src={src} alt={""} className="w-fit mx-auto h-10" />
    </div>
  );
};
