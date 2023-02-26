import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { HoverCursor } from "../Hover";
import { SchButton } from "../navbar/MenuBody";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import Image from "next/image";

export const Section5 = () => {
  const touch = useRef(false);
  const drag = useRef(false);
  const play = useRef(false);
  const [ref] = useKeenSlider<HTMLDivElement>({
    dragged: () => {
      drag.current = true;
      setIcon("nav");
    },
    dragEnded: () => {
      drag.current = false;
      if (play.current) setIcon("play");
    },
    slides: { perView: "auto", spacing: 62, origin: 0.1 },
  });
  const [hover, setHover] = useState(false);
  const [icon, setIcon] = useState<"play" | "nav">("nav");
  return (
    <div className="relative  text-center w-full my-24 py-12 z-20 bg-bgsec5">
      <div className="text-bgprim md:text-5xl xl:text-8xl lg:text-7xl text-4xl mb-4">
        Create excelent looking...
      </div>
      <div
        className="flex py-24 hidden-cursor"
        ref={ref}
        onMouseLeave={() => {
          setHover(false);
        }}
        onMouseEnter={() => {
          if (!touch.current) setHover(true);
          touch.current = false;
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          // if (hover) setHover(false);
        }}
        onTouchStart={(e) => {
          e.preventDefault;
          touch.current = true;
        }}
      >
        <HoverCursor
          show={hover}
          newClasses={` ${icon === "play" ? "bg-prim" : ""} p-3`}
        >
          {icon === "play" ? <Play /> : <Nav />}
        </HoverCursor>
        {[img1, img2, img3, img4, img5, img6].map((val, i) => {
          return (
            <div key={i} className="keen-slider__slide hidden-cursor">
              <div className="w-[20rem] max-w-[80vw] h-[20rem] max-h-[80vw] ">
                <Image
                  fill
                  priority={true}
                  alt=""
                  src={val}
                  onMouseEnter={() => {
                    play.current = true;
                    if (!drag.current) setIcon("play");
                  }}
                  onMouseLeave={() => {
                    play.current = false;
                    setIcon("nav");
                  }}
                  className="hidden-cursor rounded-2xl border-bgprim border-[2px] "
                ></Image>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <SchButton widthClass={"w-[20rem] max-w-full"}>
          SCHEDULE A CALL
        </SchButton>
      </div>
    </div>
  );
};

export const Play = () => {
  return (
    <svg
      className="w-full h-full text-bgprim"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M9 16.985v-10.021l9 5.157-9 4.864zm4-14.98c5.046.504 9 4.782 9 9.97 0 1.467-.324 2.856-.892 4.113l1.738 1.006c.732-1.555 1.154-3.285 1.154-5.119 0-6.303-4.842-11.464-11-11.975v2.005zm-10.109 14.082c-.568-1.257-.891-2.646-.891-4.112 0-5.188 3.954-9.466 9-9.97v-2.005c-6.158.511-11 5.672-11 11.975 0 1.833.421 3.563 1.153 5.118l1.738-1.006zm17.213 1.734c-1.817 2.523-4.769 4.175-8.104 4.175s-6.288-1.651-8.105-4.176l-1.746 1.011c2.167 3.122 5.768 5.169 9.851 5.169 4.082 0 7.683-2.047 9.851-5.168l-1.747-1.011z" />
    </svg>
  );
};

const Nav = () => {
  return (
    <svg
      className="w-full h-full text-bgprim"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M13.807 8.771l4.768-3.302-1.415-2.042c-.644-.928-1.678-1.427-2.727-1.427-.651 0-1.309.191-1.884.59l-2.045 1.415 3.303 4.766zm-5.184 5.609l3.302 4.767c1.286 1.857 3.353 2.853 5.452 2.853 3.628 0 6.623-2.944 6.623-6.634 0-1.302-.383-2.617-1.181-3.768l-3.301-4.765-10.895 7.547zm.52-9.431l-2.04 1.416c-1.506 1.042-1.881 3.106-.838 4.61l1.413 2.043 4.768-3.302-3.303-4.767zm-1.646 5.171c-.57-.823-.369-1.948.461-2.522l.807-.56 1.593 2.299-2.3 1.593-.561-.81zm-3.321-2.231l-2.499-1.74.62-.891 2.271 1.582c-.169.332-.3.681-.392 1.049zm.702 4.006l-2.299 1.615-.624-.888 2.414-1.699c.135.338.299.665.509.972zm-.778-1.906h-3.1v-1.085h3.029c-.013.366.005.729.071 1.085z" />
    </svg>
  );
};
