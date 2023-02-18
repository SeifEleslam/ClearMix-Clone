import { m } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function MutedPlayer({
  url,
  newClasses,
  variants,
  style,
}: {
  url: string;
  newClasses: string;
  variants: any;
  style?: any;
}) {
  const [view, setView] = useState(false);
  return (
    <m.div
      className={`overflow-clip  ${newClasses}`}
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
}
