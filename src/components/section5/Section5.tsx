import { motion } from "framer-motion";
import { useState } from "react";
import { HoverCursor } from "../Hover";
import { SchButton } from "../navbar/MenuBody";
import ScrollContainer from "react-indiana-drag-scroll";

export const Section5 = () => {
  const [hover, setHover] = useState(false);
  const [icon, setIcon] = useState<"play" | "nav">("nav");
  return (
    <div className="relative  text-center w-full my-24 py-12 z-20 bg-bgsec5">
      <div className="text-bgprim md:text-5xl xl:text-8xl lg:text-7xl text-4xl mb-4">
        Create excelent looking...
      </div>
      <ScrollContainer
        // draggingClassName={"cursor-none"}
        className="flex w-full my-12 py-20 horzbar h-full space-x-10 cursor-none overflow-x-scroll"
        // onMouseLeave={() => setHover(false)}
        // onMouseEnter={() => setHover(true)}
      >
        <HoverCursor show={hover} newClasses="">
          <Nav />
        </HoverCursor>
        {[...Array(20)].map((val, i) => {
          return (
            <div key={i} className="h-[20rem] border-white border-[2px]">
              <div className="w-[20rem]"></div>
            </div>
          );
        })}
        {/* <div className="flex w-full py-20 horzbar h-full space-x-10 overflow-x-auto"></div> */}
      </ScrollContainer>
      {/* <div className="h-[40rem]  w-full bg-black my-12  "></div> */}
      <div>
        <SchButton widthClass={"w-[20rem] max-w-full"}>
          SCHEDULE A CALL
        </SchButton>
      </div>
    </div>
  );
};

const Play = () => {
  return (
    <svg
      className="w-full text-bgprim"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
    >
      <g>
        <path
          d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
		c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
		C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"
        />
        <path
          d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
		S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"
        />
      </g>
    </svg>
  );
};

const Nav = () => {
  return (
    <svg
      className="text-bgsec5 "
      fill="#ffffff"
      version="1.1"
      viewBox="0 0 700 700"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m486.4 423.02c-0.14063 2.1094 140.73-136.37 143.6-140.08-0.63281-2.0508-147.14-146.71-147.13-145.98 0.60938 2.4375-5.2188 120.6 3.5273 286.05zm126.88-139.27c-2.5977 1.7852-106.46 92.668-108.69 94.113-0.83984-0.62891-1.8633-194.84-2.5078-195.83-0.21094 2.6562 111.2 101.72 111.2 101.72zm-399.68-146.77c0.14063-2.1055-140.74 136.37-143.6 140.08 0.63281 2.0508 147.15 146.72 147.13 145.98-0.60938-2.4414 5.2266-120.6-3.5273-286.06zm-126.88 139.27c2.5938-1.7812 106.45-92.664 108.68-94.113 0.83984 0.62891 1.8633 194.84 2.5078 195.83 0.21484-2.6562-111.19-101.72-111.19-101.72zm260.74 99.934 1.7578-9.1523c53.004-1.2656 98.09-34.293 97.598-87.488-1.625-52.992-42.5-97.898-97.965-95.648-55.215-0.19141-99.16 41.281-95.457 97.699-2.2109 55.203 40.203 93.156 94.066 94.59zm0.73828-172.53-0.078125-6.8984c40.168 1.2773 76.754 45.051 77.527 84.262-2.1602 41.316-36.586 72.32-76.328 75.273-40.602-0.64844-77.117-35.676-75.836-73.664-1.4453-45.867 34.219-75.344 74.715-78.973z" />
    </svg>
  );
};
