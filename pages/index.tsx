import * as React from "react";
import { Navbar } from "../src/components/navbar/Navbar";
import { domAnimation, LazyMotion } from "framer-motion";
import { BehindBg } from "../src/components/BehindBg";
import { Section1 } from "../src/components/section1/section1";
import { Section2 } from "../src/components/section2/section2";

export default function Home() {
  const ref = React.useRef(null);
  const accessRef = () => {
    return ref;
  };
  return (
    <LazyMotion features={domAnimation}>
      <BehindBg />
      <main>
        <Navbar />
        <div className="max-w-[90rem] p-6 mx-auto mt-[10rem] mb-[5rem]">
          <Section1 />
          <Section2 />
        </div>
      </main>
    </LazyMotion>
  );
}
