import React, { useEffect } from "react";
import lottie from "lottie-web/build/player/lottie_light";
import menuLogo from "../../assets/svgs/menu2.json";
import { LoginButton } from "./MenuBody";
import NoSSR from "../NoSSR";

export const Menu = ({
  open,
  setOpen,
  isDesktop,
}: {
  open: boolean;
  setOpen: any;
  isDesktop: boolean;
}) => {
  useEffect(() => {
    if (!isDesktop)
      lottie.loadAnimation({
        container: document.querySelector("#menu-icon")!,
        animationData: menuLogo,
        loop: false,
        autoplay: false,
      });
  }, [isDesktop]);
  return (
    <NoSSR>
      {!isDesktop ? (
        <button
          className="w-12 h-12 cursor-pointer"
          onClick={() => {
            lottie.setDirection(open ? -1 : 1);
            lottie.play();
            setOpen(!open);
          }}
          id="menu-icon"
        ></button>
      ) : (
        <div className="hidden lg:block flex ">
          {["Solutions", "Pricing", "Blog"].map((item, i) => {
            return (
              <a
                key={i}
                className="text-md text-txprim flex-1 mx-4"
                href={"#" + item}
              >
                {item}
              </a>
            );
          })}
          <LoginButton
            widthClass="p-2 flex-1 text-md p-3 mx-4 border-[2px] border-[#9b9bc9]"
            colorClass="log-bg2"
          >
            LOGIN
          </LoginButton>
          <LoginButton widthClass="p-2 flex-1 text-md p-3 mx-4">
            SCHADULE A CALL
          </LoginButton>
        </div>
      )}
    </NoSSR>
  );
};
