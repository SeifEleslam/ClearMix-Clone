import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { MainVid, MainVidMob } from "@/src/components/section1/MainVid";
export default function Test() {
  return (
    <div>
      <PermantHls name="v1" />
    </div>
  );
}

export const PermantHls = ({ name }: { name: string }) => {
  const video1 = useRef<HTMLVideoElement>(null!);
  const video2 = useRef<HTMLVideoElement>(null!);

  useEffect(() => {
    const source = `https://stream.mux.com/bx5uui2jjvo3rWFasVfiDNheeQ4mMATgKXOZWOZXMf4.m3u8?aspect=0.5625`;
    var hls = new Hls();
    hls.loadSource(source);
    hls.attachMedia(video1.current);
    hls.attachMedia(video2.current);
    hls.attachMedia(video1.current);

    return () => {
      hls.destroy();
    };
  }, []);

  return (
    <div>
      <Parent
        vid1={
          <video
            ref={video1}
            autoPlay={true}
            loop={true}
            style={{ pointerEvents: "none" }}
          />
        }
        vid2={
          <video
            ref={video2}
            autoPlay={true}
            loop={true}
            style={{ pointerEvents: "none" }}
          />
        }
      />
    </div>
  );
};

const Parent = ({
  vid1,
  vid2,
}: {
  vid1: React.ReactNode;
  vid2: React.ReactNode;
}) => {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    console.log(hide);
  }, [hide]);

  return (
    <div>
      <div>
        <MainVidMob>{vid1}</MainVidMob>
        <p>seif</p>
        <MainVid>{vid2}</MainVid>
      </div>
      <button
        onClick={() => {
          setHide((prv) => !prv);
        }}
        className="bg-white absolute"
      >
        sa
      </button>
    </div>
  );
};
