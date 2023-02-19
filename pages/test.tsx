import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
      <div></div>
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
