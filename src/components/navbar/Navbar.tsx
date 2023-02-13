import { m, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { MenuBody } from "./MenuBody";
import { useMediaQuery } from "react-responsive";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState("top");
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.on("change", () => {
      if (scrollY.get() === 0) setShow("top");
      else if (scrollY.get() < scrollY.getPrevious()) setShow("show");
      else setShow("hide");
    });
    return () => scrollY.clearListeners();
  }, []);

  const navbar = [
    "w-full h-[5rem] relative z-20 origin-top",
    "md:px-[4rem] px-8 2xl:px-[16rem]",
    "py-[2.5rem]",
    "text-white",
    "flex justify-between items-center",
  ].join(" ");
  const container = {
    hidden: { y: -100, background: "rgba(8, 8, 16, 1)", paddingTop: "0" },
    visible: {
      y: 0,
      paddingTop: "0",

      background: "rgba(8, 8, 16, 1)",
    },
    top: {
      y: 0,
      paddingTop: "1.5rem",
      background: "rgba(8, 8, 16, 0)",
    },
    topm: {
      y: 0,
      background: "rgba(8, 8, 16, 0)",
    },
  };
  return (
    <div className="w-[100vw] z-50 top-0 fixed overflow-hidden">
      <m.div
        className="z-50 w-full fixed overflow-hidden"
        variants={container}
        initial={"hidden"}
        animate={
          show === "show" || (open && !isDesktop)
            ? "visible"
            : show === "hide"
            ? "hidden"
            : show === "top" && !isMobile
            ? "top"
            : "topm"
        }
      >
        <m.div
          className="absolute w-[200vw] -bottom-[2px] z-10 h-[4px] nav-background"
          whileInView={{
            x: ["-10vw", "-100vw", "-50vw", "-100vw", "-10vw"],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0.1,
          }}
        ></m.div>
        <div className={navbar}>
          <Logo />
          <Menu setOpen={setOpen} open={open} />
        </div>
      </m.div>
      <MenuBody open={open} />
    </div>
  );
};
