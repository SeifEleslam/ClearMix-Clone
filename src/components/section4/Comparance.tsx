import { useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const Comparance = () => {
  const [widthRef, { width }] = useMeasure();
  const ref = useRef(null);
  const [view, setView] = useState<{ first: boolean; secound: boolean }>({
    first: false,
    secound: false,
  });
  const render = useInView(ref, { once: true });
  const play = useInView(ref);

  useEffect(() => {
    console.log(view);
  }, [view]);

  return (
    <div
      ref={widthRef}
      className="m-12 relative h-fit overflow-clip rounded-2xl"
    >
      <div ref={ref} className="absolute h-full w-[50%] overflow-x-clip">
        <div
          style={{ width }}
          className="absolute h-full top-0 left-0 bg-bgprim/25"
        ></div>
        {render && (
          <ReactPlayer
            url="https://stream.mux.com/T3DIas3z00UdwJmADar00eKya2BLxRqeQ14z4Fpi70242E.m3u8"
            playing={play && view.first && view.secound}
            loop={true}
            muted={true}
            width="100%"
            height="auto"
            onReady={() => {
              setView((prv) => ({ ...prv, first: true }));
            }}
          />
        )}
      </div>
      <div className="w-full">
        <div className="absolute w-full h-full top-0 left-0 bg-bgprim/25"></div>
        {render && (
          <ReactPlayer
            url="https://stream.mux.com/Q9k700YSBu014nlXJwZQIHmk9NWlswG3qGf4uGw5C4Cr00.m3u8"
            playing={play && view.first && view.secound}
            loop={true}
            muted={true}
            width="100%"
            height="auto"
            onReady={() => {
              setView((prv) => ({ ...prv, secound: true }));
            }}
          />
        )}
      </div>
    </div>
  );
};
