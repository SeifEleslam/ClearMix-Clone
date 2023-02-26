import { motion } from "framer-motion";
import { LoginButton } from "../navbar/MenuBody";

export const Section6 = () => {
  const variants = {
    hover: { scaleX: 1 },
    hide: { scaleX: 0 },
  };
  return (
    <div className="z-20 relative mt-[10rem]">
      <div className=" text-center flex my-12 items-center flex-col md:flex-row text-txprim justify-center md:space-x-12 space-y-12 md:space-y-0">
        <div className="text-xl text-txprim ">
          ClearMix helps companies execute video strategies with fully remote
          video production capabilities.
        </div>
        <LoginButton widthClass={"text-3xl p-4 whitespace-nowrap"}>
          Learn More
        </LoginButton>
      </div>
      <div className="relative pt-24 text-center md:text-left flex items-top flex-col md:flex-row text-txprim justify-between md:space-x-12 space-y-12 md:space-y-0 mx-auto max-w-[80rem]">
        <div className="absolute top-0 log-bg h-[3px] w-full"></div>
        <div className="flex-col flex space-y-4 flex-1 ">
          <div className="mb-6 font-bold text-txprim text-xl md:text-3xl">
            NY Office
          </div>
          <div className=" text-txprim/75 md:text-2xl text-xl">
            1216 Broadway
          </div>
          <div className="  text-txprim/75 md:text-2xl text-xl">
            New York, NY 10001
          </div>
        </div>
        <div className="flex-col flex space-y-4 flex-1">
          <div className="mb-6 font-bold text-txprim text-xl md:text-3xl">
            Contact
          </div>
          <motion.a
            initial="hide"
            whileHover="hover"
            href="mailto:partner@clearmix.com"
            className="relative pb-1 text-txprim/75 md:text-2xl text-xl w-fit mx-auto md:mx-0"
          >
            partner@clearmix.com
            <motion.div
              variants={variants}
              className="absolute origin-left bottom-0 log-bg h-[3px] w-full"
            ></motion.div>
          </motion.a>
          <motion.a
            href="tel:+15169901818"
            initial="hide"
            whileHover="hover"
            className="relative pb-1 w-fit text-txprim/75 md:text-2xl text-xl mx-auto md:mx-0"
          >
            +1 (516) 990-1484
            <motion.div
              variants={variants}
              className="absolute origin-left bottom-0 log-bg h-[3px] w-full"
            ></motion.div>
          </motion.a>
        </div>
        <div className="flex-col flex space-y-4 text-center md:text-left flex-1">
          <div className="mb-6 font-bold text-txprim text-xl md:text-3xl">
            Careers
          </div>
          <div className=" text-txprim/75 md:text-2xl text-xl">
            Interested in joining our team?
          </div>
          <motion.a
            href="#"
            initial="hide"
            whileHover="hover"
            className="relative pb-1 w-fit text-txprim/75 md:text-2xl text-xl mx-auto md:mx-0"
          >
            View open positions ⇀
            <motion.div
              variants={variants}
              className="absolute origin-left bottom-0 log-bg h-[3px] w-full"
            ></motion.div>
          </motion.a>
        </div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};
