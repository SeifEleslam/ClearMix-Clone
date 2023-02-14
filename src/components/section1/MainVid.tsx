import { m, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MutedPlayer } from "./section1";
import useMeasure from "react-use-measure";

export const MainVid = () => {
  const [ref, { height }] = useMeasure();
  const secRef = useRef(null);
  const [windowH, setWindowH] = useState(0);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start center", "end center"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["50rem", "85rem"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [400, 20]);

  useEffect(() => {
    function handleResize() {
      setWindowH(window.innerHeight);
    }
    setWindowH(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={secRef} className="md:h-[150vh] h-fit mt-20 mx-6">
      <m.div
        ref={ref}
        style={{ top: height ? (windowH - height) / 2 : 0 }}
        className="sticky"
      >
        <m.div
          className="left-0 right-0 w-[50rem] max-w-[100%] overflow-hidden mx-auto w-[50%]"
          style={{ width }}
        >
          <m.div className="overflow-hidden" style={{ borderRadius }}>
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
          </m.div>
        </m.div>
      </m.div>
    </div>
  );
};
