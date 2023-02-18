import { m } from "framer-motion";
import NoSSRWrapper from "../NoSSR";
import MutedPlayer from "../section1/MutedPlayer";

export const Section3 = () => {
  return (
    <div className="relative text-center mx-auto p-6 mt-20 z-20 max-w-[85rem] ">
      <p className="uppercase text-txsub mb-4 tracking-[1.5vw]">
        Content Without Hassle
      </p>
      <m.h1
        className="text-txprim md:text-5xl xl:text-8xl lg:text-7xl text-4xl mb-4"
        initial={{ opacity: 0, y: 40 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        The New-Tech Way of
      </m.h1>
      <m.h2
        className="md:text-5xl textgrd xl:text-8xl lg:text-7xl text-4xl p-2"
        initial={{ opacity: 0, y: 40 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Creating Produced Videos
      </m.h2>
      <m.p
        className="text-txprim mt-6 text-xl mb-24 max-w-[42rem] mx-auto xl:leading-[3rem]  leading-10 "
        initial={{ opacity: 0, y: 40 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
      >
        We are a fully-managed video production studio, removing the stress of
        creating video assets. By not having brick-and-mortar studios, we can
        begin shooting videos through your webcam or phone tomorrow.
      </m.p>
      <div className="relative flex h-fit md:px-5 justify-center space-x-2 md:space-x-6 mt-10">
        <MutedPlayer
          url="https://stream.mux.com/02tYe00tEaNq01aeFvEI55NphX01vSs02KtcUzD005njLv17Q.m3u8?aspect=0.5625"
          newClasses="relative rounded-2xl h-fit flex-1"
        />
        <div className="flex space-x-2 md:space-x-6 flex-1">
          <MutedPlayer
            url="https://stream.mux.com/4V6V01ieu01hJgOUZI2Ej2EISNs6rAMdbG357GuEyYJAw.m3u8?aspect=0.8"
            newClasses="relative rounded-2xl h-fit flex-1"
          />
          <MutedPlayer
            url="https://stream.mux.com/qAEmd802n9bSZuie88BzA8YsCmo9BjeqMkGfLIhypibI.m3u8?aspect=1.2"
            newClasses="relative rounded-2xl h-fit flex-1"
          />
        </div>

        <div className="absolute w-[85%] -left-10 sm:left-0 pl-0 bottom-[-4rem] sm:bottom-[-2.2rem]">
          <div className="mx-auto w-[17rem] h-[5rem] rounded-full py-5 bg-bgprim/50 backdrop-blur shadow-gold scale-[.75] md:scale-[1.2] xl:scale-[1.7]">
            <VoiceWaves />
          </div>
        </div>
      </div>
      <br />
      <div className="mt-24 text-left text-txprim flex space-x-4 mx-auto max-w-[35rem] justify-center items-center">
        <div className="relative">
          <div className="rounded-full w-[5rem] h-[5rem] md:w-[8rem] md:h-[8rem] bg-prim">
            <div className="text-5xl w-fit h-fit md:text-7xl absolute inset-0 mx-auto my-auto text-bgprim">
              C
            </div>
          </div>
        </div>
        <div>
          <p>
            &quot;ClearMix helped by taking the reins and producing high-quality
            video testimonials that we could incorporate into our media
            mix.&quot;
          </p>
          <br />
          <p className="font-bold">
            Christian Balmaseda, Asst. Dir., Enrollment & Admissions at Cornell
            Tech
          </p>
        </div>
      </div>
    </div>
  );
};

const VoiceWaves = () => {
  return (
    <div className="relative overflow-clip mx-auto w-[13rem] h-full">
      <NoSSRWrapper>
        {[...Array(20)].map((val, i) => {
          return <Bar key={i} i={i} scaleY={Math.random() + 0.05} />;
        })}
      </NoSSRWrapper>
    </div>
  );
};

const Bar = ({ i, scaleY }: { i: number; scaleY: number }) => {
  return (
    <m.div
      className={` absolute w-[2px] h-full barbg`}
      animate={{
        x: ["13rem", "-.5rem"],
      }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        delay: i * 0.25,
      }}
      style={{ scaleY }}
    ></m.div>
  );
};
