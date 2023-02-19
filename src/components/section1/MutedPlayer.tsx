import { useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function MutedPlayer({
  url,
  newClasses,
  style,
}: {
  url: string;
  newClasses: string;
  style?: any;
}) {
  const ref = useRef(null);
  const [view, setView] = useState(false);
  const render = useInView(ref, { once: true });
  const play = useInView(ref);

  useEffect(() => {
    console.log(render);
  }, [render]);
  return (
    <div ref={ref} style={style} className={newClasses + " overflow-clip"}>
      <div className="absolute w-full h-full top-0 left-0 bg-bgprim/25"></div>
      {render && (
        <ReactPlayer
          url={url}
          playing={play}
          loop={true}
          muted={true}
          width="100%"
          height="auto"
          onReady={() => {
            setView(true);
          }}
        />
      )}
    </div>
  );
}
