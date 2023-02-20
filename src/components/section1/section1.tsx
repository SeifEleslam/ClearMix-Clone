import { m, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import useMeasure from "react-use-measure";
import { SchButton } from "../navbar/MenuBody";
import NoSSR from "../NoSSR";
import { Comparance } from "../section4/Comparance";
import { ChangeText } from "./ChangText";
import { MainVid, MainVidMob } from "./MainVid";
import MutedPlayer from "./MutedPlayer";

export const Section1 = ({ isMobile }: { isMobile: boolean }) => {
  const secRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: secRef,
    offset: ["start center", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const ya = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [widthRef, { width }] = useMeasure();

  return (
    <div className="relative z-20 text-center text-txprim ">
      <div
        ref={widthRef}
        className="md:m-12 relative h-fit overflow-hidden rounded-2xl"
      >
        {width && width !== 0 && <Comparance width={width} />}
      </div>
      <div className="mb-20 z-20">
        <m.h1
          className="md:text-5xl xl:text-8xl lg:text-7xl text-4xl mb-4"
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Have Professional
        </m.h1>
        <ChangeText />
      </div>
      <div ref={secRef} className="relative overflow-x-clip w-full">
        <div className=" md:bottom-32 left-0 xl:left-12 xl:bottom-50 w-[18vw] max-w-[18rem]  mx-auto absolute hidden md:block">
          <m.div
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hide: { x: -100, opacity: 0 },
              show: { x: 0, opacity: 1 },
            }}
            style={{ y: ya }}
          >
            <MutedPlayer
              newClasses={
                "hidden md:block rounded-full border-[2px] border-prim"
              }
              url="https://stream.mux.com/nF0201aC029F021b3OSYuIm5j2WEHJEY2q02CzVWwHlTeKbw.m3u8?aspect=0.5625"
            />
          </m.div>
        </div>
        <div className=" md:bottom-1 right-[-7rem] xl:right-[2rem] xl:-bottom-20 w-[28vw] max-w-[28rem] mx-auto absolute hidden md:block border-sec ">
          <m.div
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hide: { x: 100, opacity: 0 },
              show: { x: 0, opacity: 1 },
            }}
            style={{ y: ya }}
          >
            <MutedPlayer
              newClasses={
                "hidden md:block rounded-full border-[2px] border-sec"
              }
              url="https://stream.mux.com/XF21pO1eUMV00HBXG00miS4e01vDxuwPwQEwKiPLdJR01ZE.m3u8?aspect=1"
            />
          </m.div>
        </div>

        <m.h1
          className="md:text-5xl xl:text-8xl lg:text-7xl text-4xl mb-4"
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
        >
          Created Remotely
        </m.h1>
        <m.div
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
        >
          <p className="text-xl xl:text-2xl mb-10 max-w-[30rem] xl:max-w-[40rem] mx-auto xl:leading-[3rem]  leading-10 ">
            We are a virtual video production house, helping companies create
            video content remotely with professional producers and editors
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.8 },
          }}
        >
          <SchButton widthClass={"md:w-[20rem] w-[15rem]"}>
            SCHEDULE A CALL
          </SchButton>
        </m.div>
      </div>
      <MainVid />
      <MainVidMob />
    </div>
  );
};
//https://stream.mux.com/bx5uui2jjvo3rWFasVfiDNheeQ4mMATgKXOZWOZXMf4.m3u8?aspect=0.5625
//https://stream.mux.com/nF0201aC029F021b3OSYuIm5j2WEHJEY2q02CzVWwHlTeKbw.m3u8?aspect=0.5625
//https://stream.mux.com/XF21pO1eUMV00HBXG00miS4e01vDxuwPwQEwKiPLdJR01ZE.m3u8?aspect=1
