import { useRef, useState } from "react";
import { SchButton } from "../navbar/MenuBody";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img1 from "../../assets/images/img1.webp";
import img2 from "../../assets/images/img2.webp";
import img3 from "../../assets/images/img3.webp";
import img4 from "../../assets/images/img5.webp";
import img5 from "../../assets/images/img6.webp";
import img6 from "../../assets/images/img7.webp";
import img7 from "../../assets/images/img8.webp";
import Image from "next/image";
import { HoverCursor } from "../Hover";

export const Section5 = () => {
  const [cursor, setCursor] = useState<"nav" | "none" | "play">("none");
  const hovered = useRef(false);
  const [ref] = useKeenSlider<HTMLDivElement>({
    renderMode: "performance",
    dragged: () => {
      if (navigator.maxTouchPoints > 0) return;
      setCursor("nav");
    },
    dragEnded: () => {
      if (navigator.maxTouchPoints > 0) return;
      if (hovered.current) setCursor("play");
    },
    slides: { perView: "auto", spacing: 62, origin: "center" },
    mode: "free-snap",
  });
  return (
    <div className="text-center w-full my-24 py-6 z-20 bg-bgsec5 py-[10rem]">
      <div className="textgrd md:text-5xl xl:text-8xl lg:text-7xl text-4xl">
        Create excelent looking...
      </div>
      <HoverCursor
        newClasses={` ${
          cursor === "play" ? "bg-prim p-10" : "p-5 border-[4px] border-bgprim"
        }`}
        state={cursor}
      ></HoverCursor>
      <div
        className="keen-slider flex my-6 py-6 h-[18rem] hidden-cursor"
        ref={ref}
        onMouseLeave={() => {
          if (navigator.maxTouchPoints > 0) return;
          setCursor("none");
        }}
        onMouseEnter={() => {
          if (navigator.maxTouchPoints > 0) return;
          setCursor("nav");
        }}
      >
        {[img1, img2, img3, img4, img5, img6, img7].map((val, i) => {
          return (
            <div
              key={i}
              className={`keen-slider__slide h-[13rem] hidden-cursor bg-bgprim rounded-2xl ${
                i % 2 === 0 ? "self-start" : "self-end"
              }`}
              style={{
                maxWidth: "22rem",
                minWidth: "22rem",
                maxHeight: "13rem",
                minHeight: "13rem",
              }}
            >
              <Image
                fill
                alt=""
                sizes="(max-width: 22rem) 80vw"
                src={val}
                onMouseEnter={() => {
                  setCursor("play");
                  hovered.current = true;
                }}
                onMouseLeave={() => {
                  setCursor("nav");
                  hovered.current = true;
                }}
                className="hidden-cursor object-cover rounded-2xl border-bgprim border-[2px] "
              ></Image>
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
