import { m, useScroll, useSpring, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { SchButton } from "../navbar/MenuBody";
import { ChangeText } from "./ChangText";
import { MainVid, MainVidMob } from "./MainVid";
import NoSSRWrapper from "../NoSSR";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

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

  return (
    <div className="relative z-20 text-center text-txprim ">
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
        <MutedPlayer
          newClasses={
            "rounded-full border-[2px]" +
            " md:bottom-32 left-0 xl:left-12 xl:bottom-50 w-[18vw] max-w-[18rem]  mx-auto absolute hidden md:block border-prim"
          }
          url="https://stream.mux.com/nF0201aC029F021b3OSYuIm5j2WEHJEY2q02CzVWwHlTeKbw.m3u8?aspect=0.5625"
          variants={{
            hide: { x: -100, opacity: 0 },
            show: { x: 0, opacity: 1 },
          }}
          style={{ y: ya }}
        />
        <MutedPlayer
          newClasses={
            "rounded-full border-[2px] " +
            " md:bottom-1 right-[-7rem] xl:right-[2rem] xl:-bottom-20 w-[28vw] max-w-[28rem] mx-auto absolute hidden md:block border-sec "
          }
          url="https://stream.mux.com/XF21pO1eUMV00HBXG00miS4e01vDxuwPwQEwKiPLdJR01ZE.m3u8?aspect=1"
          variants={{
            hide: { x: 100, opacity: 0 },
            show: { x: 0, opacity: 1 },
          }}
          style={{ y: ya }}
        />

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
      <ReactPlayer
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="auto"
        url="https://stream.mux.com/bx5uui2jjvo3rWFasVfiDNheeQ4mMATgKXOZWOZXMf4.m3u8?aspect=0.5625"
        wrapper={!isMobile ? MainVid : MainVidMob}
      />
    </div>
  );
};
//https://stream.mux.com/bx5uui2jjvo3rWFasVfiDNheeQ4mMATgKXOZWOZXMf4.m3u8?aspect=0.5625
//https://stream.mux.com/nF0201aC029F021b3OSYuIm5j2WEHJEY2q02CzVWwHlTeKbw.m3u8?aspect=0.5625
//https://stream.mux.com/XF21pO1eUMV00HBXG00miS4e01vDxuwPwQEwKiPLdJR01ZE.m3u8?aspect=1

export const MutedPlayer = ({
  url,
  newClasses,
  variants,
  style,
}: {
  url: string;
  newClasses: string;
  variants: any;
  style?: any;
}) => {
  const [view, setView] = useState(false);
  return (
    <m.div
      className={`overflow-hidden  ${newClasses}`}
      initial="hide"
      animate={view ? "show" : "hide"}
      transition={{ duration: 0.5 }}
      variants={variants}
      style={style}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-bgprim/25"></div>
      <ReactPlayer
        url={url}
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="auto"
        onReady={() => {
          setView(true);
        }}
      />
    </m.div>
  );
};

const WrappedPlayer = ({
  url,
  wrapper,
}: {
  url: string;
  wrapper: React.ComponentType<{
    children: React.ReactNode;
  }>;
}) => {
  return (
    <ReactPlayer
      wrapper={wrapper}
      url={url}
      playing={true}
      loop={true}
      muted={true}
      width="100%"
      height="auto"
    />
  );
};
