import { m, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import ReactPlayer from "react-player/lazy";

export const Comparance = ({ width }: { width: number }) => {
  const ref = useRef(null);
  const ref1 = useRef<any>(null);
  const ref2 = useRef<any>(null);
  const x = useMotionValue(0.5 * width);
  const newWidth = useTransform(x, [0, width], ["0%", "100%"]);
  const playSync = () => {
    if (ref1.current && ref2.current) {
      if (
        Math.abs(
          (ref2.current.getCurrentTime() ?? 0) -
            (ref1.current.getCurrentTime() ?? 0)
        ) < 0.2
      )
        return;
      const time = ref2.current.getCurrentTime() ?? 0;
      ref1.current.seekTo(time, "seconds");
      ref2.current.seekTo(time, "seconds");
    }
  };

  const render = useInView(ref, { once: true });
  const play = useInView(ref);

  return (
    <div style={!render ? { height: width / 2 } : {}}>
      <m.div
        style={{ x }}
        className={`z-20 top-0 translate-x-[${
          width / 2
        }] absolute bg-bgprim h-full w-[1px]`}
      ></m.div>
      <m.div
        drag="x"
        dragConstraints={{
          left: 0.25 * width,
          right: 0.75 * width,
        }}
        style={{ x }}
        dragMomentum={true}
        whileTap={{ scale: 0.9, color: "#fff" }}
        className="z-20 cursor-pointer text-3xl translate-x-[300px] w-[4.5rem] h-[4.5rem] flex justify-center items-center shadow-gold top-0 bottom-0 my-auto h-fit w-fit absolute bg-bgprim -left-[2.25rem] rounded-full "
      >
        <svg
          data-v-6f5cf7c2=""
          width="29"
          height="14"
          viewBox="0 0 29 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00391 12L2.00391 7L7.00391 2"
            stroke="currentColor"
            stroke-width="3"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21.812 2L26.812 7L21.812 12"
            stroke="currentColor"
            stroke-width="3"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </m.div>
      <m.div
        ref={ref}
        style={{ width: newWidth }}
        className="absolute h-full bg-bgprim w-[50%] overflow-x-hidden"
      >
        <div className="absolute h-full top-0 left-0 bg-bgprim/25"></div>
        <div style={{ width }}>
          {render && (
            <ReactPlayer
              ref={ref1}
              url="https://stream.mux.com/T3DIas3z00UdwJmADar00eKya2BLxRqeQ14z4Fpi70242E.m3u8"
              playing={play}
              loop={true}
              muted={true}
              width="100%"
              height="auto"
              onProgress={playSync}
            />
          )}
        </div>
      </m.div>
      <div className="w-full">
        <div className="absolute w-full h-fit top-0 left-0 bg-bgprim/25"></div>
        {render && (
          <ReactPlayer
            ref={ref2}
            url="https://stream.mux.com/Q9k700YSBu014nlXJwZQIHmk9NWlswG3qGf4uGw5C4Cr00.m3u8"
            playing={play}
            loop={true}
            muted={true}
            width="100%"
            height="auto"
          />
        )}
      </div>
    </div>
  );
};
