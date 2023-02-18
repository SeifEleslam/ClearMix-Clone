import { AnimatePresence, m } from "framer-motion";
import { type } from "os";
import React from "react";

export const MenuBody = ({ open }: { open: boolean }) => {
  return (
    <AnimatePresence>
      {open && (
        <m.div
          className="fixed w-full h-full lg:hidden"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2, transition: { duration: 0.3 } }}
        >
          <div className="w-full h-full p-2 overflow-scroll">
            <div className="flex relative z-10 flex-col w-full h-full min-h-[500px] ">
              <m.div
                className="w-full flex-1 flex justify-center items-center flex-col"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.1,
                  },
                }}
              >
                {["Solutions", "Pricing", "Blog"].map((item, i) => {
                  return (
                    <Item key={i} i={i}>
                      {item}
                    </Item>
                  );
                })}
              </m.div>
              <m.div
                className="flex flex-col md:flex-row justify-center items-center h-fit p-4 md:space-x-10 md:space-y-0 space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.4 } }}
                exit={{ opacity: 0 }}
              >
                <LoginButton widthClass="w-full p-6">LOGIN</LoginButton>
                <SchButton widthClass="w-full">SCHEDULE A CALL</SchButton>
              </m.div>
            </div>
          </div>

          <m.div
            className="bg-bgprim absolute top-[-10rem] right-[-10rem] z-0 w-[20rem] h-[20rem] rounded-full"
            initial={{ scale: 1 }}
            animate={{ scale: 9 }}
            transition={{ duration: 0.4 }}
          ></m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

const Item = ({ children, i }: { children: React.ReactNode; i: number }) => {
  return (
    <m.a
      className="text-3xl text-txprim my-4"
      href={"#" + children}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, delay: 0.1 * (i + 1), type: "tween" },
      }}
      exit={{ opacity: 0 }}
    >
      {children}
    </m.a>
  );
};

export const SchButton = ({
  widthClass,
  children,
}: {
  widthClass: string;
  children: React.ReactNode;
}) => {
  return (
    <m.button
      className={`${widthClass} schshadow sub-bg p-6 text-xl rounded-full text-txdef`}
      initial={{ backgroundPositionX: "10%", y: 0 }}
      whileHover={{ backgroundPositionX: "90%", y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </m.button>
  );
};

export const LoginButton = ({
  widthClass,
  children,
  colorClass,
}: {
  widthClass: string;
  children: React.ReactNode;
  colorClass?: string;
}) => {
  const buttonVariant = { hover: { color: "#fff" } };
  const bgVariant = {
    hover: { scaleY: 4, scaleX: 1.5 },
    rest: { scaleY: 0, scaleX: 1 },
  };
  return (
    <m.button
      className={`${widthClass} overflow-hidden text-prim bg-bgsec relative rounded-full`}
      whileHover="hover"
      variants={buttonVariant}
    >
      <p className="z-10 relative">{children}</p>
      <m.div
        className={`w-full z-0 h-full top-[100%] left-0 right-0 mx-auto absolute rounded-[100%] ${
          colorClass ? colorClass : "log-bg "
        }`}
        variants={bgVariant}
        transition={{ duration: 0.3 }}
      ></m.div>
    </m.button>
  );
};
