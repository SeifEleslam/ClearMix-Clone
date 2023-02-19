import { m, useInView } from "framer-motion";
import { useRef } from "react";
import useMeasure from "react-use-measure";
import ReactPlayer from "react-player/lazy";

export const Comparance = () => {
  const [widthRef, { width }] = useMeasure();
  const ref = useRef(null);
  const ref1 = useRef<any>(null);
  const ref2 = useRef<any>(null);

  const playSync = () => {
    if (ref1.current && ref2.current) {
      if (
        Math.abs(
          (ref2.current.getCurrentTime() ?? 0) -
            (ref1.current.getCurrentTime() ?? 0)
        ) < 0.2
      )
        return;
      ref1.current.seekTo(ref2.current.getCurrentTime() ?? 0, "seconds");
    }
  };

  const render = useInView(ref, { once: true });
  const play = useInView(ref);

  return (
    <div
      ref={widthRef}
      className="md:m-12 relative h-fit overflow-clip rounded-2xl"
    >
      <m.div drag="x" className="left-24 top-0 absolute h-full w-[5px]"></m.div>
      <m.div ref={ref} className="absolute h-full w-[50%] overflow-clip">
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
        <div className="absolute w-full h-full top-0 left-0 bg-bgprim/25"></div>
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
