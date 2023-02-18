import { m, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MutedPlayer } from "./section1";
import useMeasure from "react-use-measure";

export const MainVid = ({ children }: { children: React.ReactNode }) => {
  const [ref, { height }] = useMeasure();
  const secRef = useRef(null);
  const [windowH, setWindowH] = useState(0);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start center", "end center"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["50rem", "85rem"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [400, 20]);
  // const top = useSpring(height ? (windowH - height) / 2 : 0);

  useEffect(() => {
    function handleResize() {
      setWindowH(window.innerHeight);
    }
    setWindowH(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={secRef}
      className="md:block hidden h-[100vh] min-h-[100vw] mt-20 mx-6"
    >
      <m.div
        ref={ref}
        style={{ top: (windowH - height) / 2 }}
        className="sticky"
      >
        <m.div
          className="left-0 right-0 w-[50rem] max-w-[100%] overflow-hidden mx-auto w-[50%]"
          style={{ width }}
        >
          <m.div
            className="overflow-hidden w-full border-black border-[2px] relative"
            style={{ borderRadius }}
          >
            <div className="absolute w-full h-full top-0 left-0 bg-bgprim/25"></div>
            {children}
          </m.div>
        </m.div>
      </m.div>
    </div>
  );
};

export const MainVidMob = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-20 md:hidden block mx-6">
      <m.div className="sticky">
        <m.div className="left-0 right-0 w-[50rem] max-w-[100%] overflow-hidden mx-auto w-[50%]">
          <m.div className="overflow-hidden rounded-2xl  w-full border-black border-[2px] relative">
            <div className="absolute w-full h-full top-0 left-0 bg-bgprim/25"></div>
            {children}
          </m.div>
        </m.div>
      </m.div>
    </div>
  );
};

const VidChild = () => {
  return (
    <MutedPlayer
      url={
        "https://stream.mux.com/bx5uui2jjvo3rWFasVfiDNheeQ4mMATgKXOZWOZXMf4.m3u8?aspect=0.5625"
      }
      newClasses={"w-full border-black relative"}
      variants={{
        hide: { y: 100, opacity: 0 },
        show: { y: 0, opacity: 1 },
      }}
    />
  );
};
