import React, { useEffect } from "react";
import lottie from "lottie-web/build/player/lottie_light";
import menuLogo from "../../assets/svgs/menu.json";
import { LoginButton } from "./MenuBody";

export const Menu = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#menu-icon")!,
      animationData: menuLogo,
      loop: false,
      autoplay: false,
    });
  }, []);
  return (
    <div>
      <button
        className="w-12 h-12 cursor-pointer lg:hidden"
        onClick={() => {
          lottie.setDirection(open ? -1 : 1);
          lottie.play();
          setOpen(!open);
        }}
        id="menu-icon"
        aria-label="menu-icon"
        name="menu-icon"
      ></button>
      <div className="hidden lg:block flex ">
        {["Solutions", "Pricing", "Blog"].map((item, i) => {
          return (
            <a
              key={i}
              className="text-lg text-links flex-1 mx-4"
              href={"#" + item}
            >
              {item}
            </a>
          );
        })}
        <LoginButton
          widthClass="py-3 px-6 flex-1 text-md mx-4 border-[2px] border-links"
          colorClass="bg-links"
        >
          LOGIN
        </LoginButton>
        <LoginButton widthClass="p-2 flex-1 text-md p-3 mx-4">
          SCHADULE A CALL
        </LoginButton>
      </div>
    </div>
  );
};
