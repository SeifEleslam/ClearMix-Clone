import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import useMeasure from "react-use-measure";
import { SchButton } from "../navbar/MenuBody";
import { Comparance } from "../section4/Comparance";
import { ChangeText } from "./ChangText";
import { MainVid, MainVidMob } from "./MainVid";
import MutedPlayer from "./MutedPlayer";

export const Section1 = () => {
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

  return (
    <div className="z-20 text-center text-txprim ">
      <div className="mb-20 z-20">
        <motion.div
          className="md:text-5xl xl:text-8xl lg:text-7xl text-4xl mb-4"
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Have Professional
        </motion.div>
        <ChangeText />
      </div>
      <div ref={secRef} className="relative overflow-x-clip w-full">
        <div className=" md:bottom-32 left-0 xl:left-12 xl:bottom-50 w-[18vw] max-w-[18rem]  mx-auto absolute hidden md:block">
          <MutedPlayer
            variants={{
              hide: { x: -100, opacity: 0 },
              show: { x: 0, opacity: 1 },
            }}
            style={{ y: ya }}
            newClasses={"hidden md:block rounded-full border-[2px] border-prim"}
            url="https://stream.mux.com/nF0201aC029F021b3OSYuIm5j2WEHJEY2q02CzVWwHlTeKbw.m3u8?aspect=0.5625"
            aspects={0.5625}
          />
        </div>
        <div className=" md:bottom-1 right-[-7rem] xl:right-[2rem] xl:-bottom-20 w-[28vw] max-w-[28rem] mx-auto absolute hidden md:block border-sec ">
          <MutedPlayer
            style={{ y: ya }}
            variants={{
              hide: { x: 100, opacity: 0 },
              show: { x: 0, opacity: 1 },
            }}
            newClasses={"hidden md:block rounded-full border-[2px] border-sec"}
            url="https://stream.mux.com/XF21pO1eUMV00HBXG00miS4e01vDxuwPwQEwKiPLdJR01ZE.m3u8?aspect=1"
            aspects={0.5625}
          />
        </div>

        <motion.div
          className="md:text-5xl xl:text-8xl lg:text-7xl text-4xl mb-4"
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
        >
          Created Remotely
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
        >
          <p className="text-xl xl:text-2xl mb-10 max-w-[30rem] xl:max-w-[40rem] mx-auto xl:leading-[3rem]  leading-10 ">
            We are a virtual video production house, helping companies create
            video content remotely with professional producers and editors
          </p>
        </motion.div>
        <motion.div
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
        </motion.div>
      </div>
      <MainVid />
      <MainVidMob />
    </div>
  );
};
//https://stream.mux.com/bx5uui2jjvo3rWFasVfiDNheeQ4mMATgKXOZWOZXMf4.m3u8?aspect=0.5625
//https://stream.mux.com/nF0201aC029F021b3OSYuIm5j2WEHJEY2q02CzVWwHlTeKbw.m3u8?aspect=0.5625
//https://stream.mux.com/XF21pO1eUMV00HBXG00miS4e01vDxuwPwQEwKiPLdJR01ZE.m3u8?aspect=1
