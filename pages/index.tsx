import * as React from "react";
import { Navbar } from "../src/components/navbar/Navbar";
import { BehindBg } from "../src/components/BehindBg";
import { Section1 } from "../src/components/section1/section1";
import { Section2 } from "../src/components/section2/section2";
import { Section3 } from "@/src/components/section3/section3";
import { useMediaQuery } from "react-responsive";
import { Section4 } from "@/src/components/section4/section4";
import NoSSR from "../src/components/NoSSR";
import { Section5 } from "@/src/components/section5/Section5";
import { Section6 } from "@/src/components/section6/section6";
import Head from "next/head";
import { HoverCursor } from "@/src/components/Hover";

export default function Home() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div>
      <Head>
        <title>Cloning ClearMix home</title>
      </Head>
      <div id="body" className="overflow-clip">
        <NoSSR>{!isMobile && <BehindBg />}</NoSSR>
        <main>
          <Navbar isDesktop={isDesktop} isMobile={isMobile} />
          <div className="mx-auto mt-[10rem] mb-[5rem]">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
          </div>
        </main>
      </div>
    </div>
  );
}
