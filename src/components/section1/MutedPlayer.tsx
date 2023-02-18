import { m } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";

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
  const [view, setView] = useState(false);
  return (
    <div style={style} className={newClasses + " overflow-clip"}>
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
    </div>
  );
}
