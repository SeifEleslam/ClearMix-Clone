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
import { motion } from "framer-motion";

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
    <div className="text-center mx-auto p-6 mt-20 z-20 max-w-[85rem] ">
      <p className="text-txsub mb-4 tracking-[1.5vw]">
        WIDELY USED BY PROFESSIONALS
      </p>
      <motion.div
        className="md:text-5xl textgrd xl:text-8xl lg:text-7xl text-4xl"
        initial={{ opacity: 0, y: 40 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        TRUSTED BY TEAMS AT
      </motion.div>
      <div className="flex bg-prim/[.2] shadow-2xl flex-wrap items-center md:px-5 pb-10 justify-center space-y-10 md:rounded-full rounded-2xl mt-10">
        <div></div>
        {images.map((val, i) => {
          return <TrustedComp key={i} i={i} src={val} />;
        })}
      </div>
    </div>
  );
};

export const TrustedComp = ({
  src,
  i,
}: {
  src: StaticImageData;
  i: number;
}) => {
  return (
    <motion.div
      className="relative w-[50%] max-h-[5rem] md:w-auto px-6 lg:px-10"
      initial={{
        opacity: 0,
        y: 30,
      }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, delay: 0.1 * (i + 1) },
      }}
    >
      <Image
        src={src}
        alt={""}
        className=" max-h-[5rem] w-auto max-w-[100%] md:max-w-[10rem] mx-auto "
        loading="lazy"
      />
    </motion.div>
  );
};
