import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { HoverCursor } from "../Hover";
import { Play } from "../section5/Section5";
import MutedPlayer from "./MutedPlayer";

export const MainVid = () => {
  const [ref, { height }] = useMeasure();
  const [hover, setHover] = useState(false);
  const secRef = useRef(null);
  const [windowH, setWindowH] = useState(0);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start center", "end end"],
  });
  const widthTran = useTransform(scrollYProgress, [0, 1], [800, 1500]);
  const width = useSpring(widthTran, { stiffness: 1000, damping: 100 });
  const borderRadiusTran = useTransform(scrollYProgress, [0, 1], [400, 20]);
  const borderRadius = useSpring(borderRadiusTran);

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
      className="md:block hidden h-[70vh] min-h-[70vw] mt-20 mx-6"
    >
      <HoverCursor show={hover} newClasses={` log-bg p-3`}>
        <Play />
      </HoverCursor>
      <motion.div
        ref={ref}
        style={{ top: (windowH - height) / 2 }}
        className="sticky"
      >
        <motion.div
          className="w-[800px] max-w-[100%] min-w-[50%] mx-auto w-[50%]"
          style={{ width }}
        >
          <motion.div
            className="overflow-clip shadow-gold hidden-cursor relative "
            style={{ borderRadius }}
            onMouseLeave={() => {
              setHover(false);
            }}
            onMouseEnter={() => {
              setHover(true);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
            }}
          >
            <MutedPlayer
              url="https://stream.mux.com/bx5uui2jjvo3rWFasVfiDNheeQ4mMATgKXOZWOZXMf4.m3u8?aspect=0.5625"
              newClasses=" hidden-cursor"
              aspects={0.5625}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const MainVidMob = () => {
  return (
    <div className="mt-20 md:hidden block mx-6">
      <div className="sticky">
        <div className="left-0 right-0 w-[50rem] max-w-[100%] overflow-clip mx-auto w-[50%]">
          <div className="overflow-clip rounded-2xl  w-full border-black border-[2px] relative">
            <MutedPlayer
              url="https://stream.mux.com/bx5uui2jjvo3rWFasVfiDNheeQ4mMATgKXOZWOZXMf4.m3u8?aspect=0.5625"
              newClasses=""
              aspects={0.5625}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
