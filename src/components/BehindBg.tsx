import { delay, m, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";

export const BehindBg = () => {
  // const mouseX = useMotionValue(200);
  const mouseY = useMotionValue(200);

  // const rotateX = useTransform(mouseX, [0, 10000], [0, 2000]);
  const rotateY = useTransform(mouseY, [0, 100000], [0, 20000]);

  function handleMouse(event: MouseEvent) {
    // mouseX.set(event.pageX);
    mouseY.set(event.pageX);
  }
  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="z-0 overflow-hidden fixed w-full h-full top-0 left-0 blur-2xl">
      <div className="absolute w-full h-full top-0 left-0 bg-bgprim/75 z-10 "></div>
      <div className="fixed w-[100vw] h-[100vh] ">
        <m.div
          className={`w-[100%] absolute inset-0 h-[100%] opacity-50 duration-[10000ms] rounded-full bg-prim `}
          style={{ rotateY, rotateX: 45 }}
        ></m.div>
      </div>
    </div>
  );
};
