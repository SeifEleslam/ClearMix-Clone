import * as React from "react";
import { Navbar } from "../src/components/navbar/Navbar";
import { domAnimation, LazyMotion } from "framer-motion";
import { BehindBg } from "../src/components/BehindBg";
import { Section1 } from "../src/components/section1/section1";
import { Section2 } from "../src/components/section2/section2";
import { Section3 } from "@/src/components/section3/section3";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 600 });
  return (
    <LazyMotion features={domAnimation} strict>
      {!isMobile && <BehindBg />}
      <main>
        <Navbar isDesktop={isDesktop} isMobile={isMobile} />
        <div className="mx-auto mt-[10rem] mb-[5rem]">
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
      </main>
    </LazyMotion>
  );
}
