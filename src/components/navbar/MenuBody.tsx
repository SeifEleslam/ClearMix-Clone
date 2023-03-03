import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export const MenuBody = ({ open }: { open: boolean }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed w-full h-full"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
        >
          <div className="w-full h-full p-2 overflow-scroll">
            <div className="flex relative z-10 flex-col w-full h-full min-h-[500px] ">
              <motion.div
                className="w-full flex-1 flex justify-center items-center flex-col"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
              >
                {["Solutions", "Pricing", "Blog"].map((item, i) => {
                  return (
                    <Item key={i} i={i}>
                      {item}
                    </Item>
                  );
                })}
              </motion.div>
              <motion.div
                className="flex flex-col md:flex-row justify-center items-center h-fit p-4 md:space-x-10 md:space-y-0 space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.4 } }}
                exit={{ opacity: 0 }}
              >
                <LoginButton widthClass="w-full p-6">LOGIN</LoginButton>
                <SchButton widthClass="w-full">SCHEDULE A CALL</SchButton>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="bg-bgprim absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto z-0 w-24 h-24 rounded-full"
            initial={{ scale: 4 }}
            animate={{ scale: 15 }}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Item = ({ children, i }: { children: React.ReactNode; i: number }) => {
  return (
    <motion.a
      className="text-3xl text-links my-4"
      href={"#" + children}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2 * (i + 1) },
      }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.a>
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
    <motion.button
      className={`${widthClass} schshadow sub-bg p-6 text-xl rounded-full text-txdef`}
      initial={{ backgroundPositionX: "10%", y: 0 }}
      whileHover={{ backgroundPositionX: "90%", y: -10 }}
    >
      {children}
    </motion.button>
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
  const buttonVariant = { hover: { color: "#080810" } };
  const bgVariant = {
    hover: { scaleY: 4, scaleX: 1.5 },
    rest: { scaleY: 0, scaleX: 1 },
  };
  return (
    <motion.button
      className={`${widthClass} overflow-clip text-prim bg-bgsec relative rounded-full`}
      whileHover="hover"
      variants={buttonVariant}
    >
      <p className="z-10 relative">{children}</p>
      <motion.div
        className={`w-full z-0 h-full top-[100%] left-0 right-0 mx-auto absolute rounded-[100%] ${
          colorClass ? colorClass : "log-bg "
        }`}
        variants={bgVariant}
      ></motion.div>
    </motion.button>
  );
};
