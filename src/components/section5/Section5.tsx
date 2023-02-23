import { motion } from "framer-motion";
import { SchButton } from "../navbar/MenuBody";

export const Section5 = () => {
  return (
    <div className="relative horzbar text-center w-full my-24 py-12 z-20 bg-bgsec5">
      <div className="text-bgprim md:text-5xl xl:text-8xl lg:text-7xl text-4xl mb-4">
        Create excelent looking...
      </div>
      <div className="h-[40rem] w-full bg-black my-12 "></div>
      <div>
        <SchButton widthClass={"w-[20rem] max-w-full"}>
          SCHEDULE A CALL
        </SchButton>
      </div>
    </div>
  );
};
