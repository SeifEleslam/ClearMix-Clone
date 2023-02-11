import { m } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ChangeText = () => {
  const states = [
    "Intro Videos",
    "Educational Videos",
    "Podcast Videos",
    "Testimonial Videos",
  ];
  const [state, setState] = useState(states[0]);
  const variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
    hide: {
      y: 20,
      opacity: 0,
    },
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setState((prv) =>
        states.indexOf(prv) >= states.length - 1
          ? states[0]
          : states[states.indexOf(prv) + 1]
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <m.div
      initial={{ opacity: 0, y: 40 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
    >
      <m.h1
        className="md:text-5xl textgrd xl:text-8xl lg:text-7xl text-4xl"
        key={state}
        variants={variants}
        exit={"hideagain"}
        animate={"show"}
        initial="hide"
      >
        {state}
      </m.h1>
    </m.div>
  );
};
