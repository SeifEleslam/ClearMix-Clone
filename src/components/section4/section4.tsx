import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { Comparance } from "./Comparance";

export const Section4 = () => {
  const [widthRef, { width }] = useMeasure();

  return (
    <div className="text-center mx-auto p-6 mt-20 z-20 max-w-[85rem] ">
      <p className="uppercase max-w-[40rem] mx-auto text-txsub mb-4 tracking-[1.5vw]">
        Professional Video should be Branded
      </p>
      <motion.div
        className="text-txprim md:text-5xl xl:text-8xl lg:text-7xl text-4xl mb-4"
        initial={{ opacity: 0, y: 40 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Video Footage that is
      </motion.div>
      <motion.div
        className="md:text-5xl textgrd xl:text-8xl lg:text-7xl text-4xl p-2"
        initial={{ opacity: 0, y: 40 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Branded and Animated
      </motion.div>
      <motion.div
        className="text-txprim mt-6 text-xl mb-24 max-w-[42rem] mx-auto xl:leading-[3rem]  leading-10 "
        initial={{ opacity: 0, y: 40 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
      >
        After recording quality footage with our virtual recording studio, we
        add custom branded logo bumpers, transitions, b-roll and overlays.
      </motion.div>
      <div className="md:mx-12">
        <div
          ref={widthRef}
          className="relative shadow-gold max-w-[60rem] mx-auto h-fit overflow-clip bg-bgprim rounded-2xl"
        >
          {width && width !== 0 && <Comparance width={width} />}
        </div>
      </div>
    </div>
  );
};
