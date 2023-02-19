import { m } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { Waypoint } from "react-waypoint";

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
  const [render, setRender] = useState(false);
  const [play, setPlay] = useState(false);

  const handleEnter = () => {
    if (!render) setRender(true);
    setPlay(true);
  };
  const handleLeave = () => {
    setPlay(false);
  };
  useEffect(() => {
    console.log(render);
  }, [render]);
  return (
    <div style={style} className={newClasses + " overflow-clip"}>
      <div className="absolute w-full h-full top-0 left-0 bg-bgprim/25"></div>
      <Waypoint onEnter={handleEnter} onLeave={handleLeave}>
        <div className="w-full">
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
      </Waypoint>
    </div>
  );
}
