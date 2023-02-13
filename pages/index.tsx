import * as React from "react";
import { Navbar } from "../src/components/navbar/Navbar";
import { domAnimation, LazyMotion } from "framer-motion";
import { BehindBg } from "../src/components/BehindBg";
import { Section1 } from "../src/components/section1/section1";
import { Section2 } from "../src/components/section2/section2";
import { Section3 } from "@/src/components/section3/section3";

export default function Home() {
  return (
    <LazyMotion features={domAnimation} strict>
      <BehindBg />
      <main>
        <Navbar />
        <div className="mx-auto mt-[10rem] mb-[5rem]">
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
      </main>
    </LazyMotion>
  );
}
