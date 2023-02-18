import { lazy, Suspense } from "react";
import useMeasure from "react-use-measure";

const MutedPlayer = lazy(() => import("../section1/MutedPlayer"));

export const Comparance = () => {
  const [ref, { width }] = useMeasure();
  return (
    <div ref={ref} className="w-full relative h-fit rounded-2xl">
      <div className="overflow-clip absolute h-full w-[50%]  rounded-2xl">
        <MutedPlayer
          url="https://stream.mux.com/T3DIas3z00UdwJmADar00eKya2BLxRqeQ14z4Fpi70242E.m3u8"
          newClasses={""}
          style={{ width }}
        />
      </div>
      <div className="w-full overflow-clip rounded-2xl">
        <MutedPlayer
          url="https://stream.mux.com/Q9k700YSBu014nlXJwZQIHmk9NWlswG3qGf4uGw5C4Cr00.m3u8"
          newClasses={""}
        />
      </div>
    </div>
  );
};
