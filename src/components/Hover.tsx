import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

export const HoverCursor = ({
  state,
  newClasses,
  mouseDown,
}: {
  state: "none" | "play" | "nav";
  newClasses: string;
  mouseDown: boolean;
}) => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function handleMouse(event: any) {
    x.set(event.clientX - ref.current.offsetLeft);
    y.set(event.clientY - ref.current.offsetTop);
  }

  useLayoutEffect(() => {
    window.addEventListener("pointermove", handleMouse);
    return () => window.removeEventListener("pointermove", handleMouse);
  }, []);

  return (
    <div ref={ref} className="fixed z-50">
      <AnimatePresence>
        {state !== "none" && (
          <motion.div
            key={state}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={
              mouseDown ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 1 }
            }
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.3, type: "tween" }}
            style={{ x, y }}
          >
            <div
              className={
                "z-50 pointer-events-none rounded-full absolute w-28 h-28 -m-12 " +
                newClasses
              }
            >
              {state === "play" ? <Play /> : <Nav />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Play = () => {
  return (
    <svg
      className="w-fuul h-full text-white"
      fill="#ffffff"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="none" height="256" width="256" />
      <path d="M232.3,114.3,88.3,26.4a15.5,15.5,0,0,0-16.1-.3A15.8,15.8,0,0,0,64,40V216a15.8,15.8,0,0,0,8.2,13.9,15.5,15.5,0,0,0,16.1-.3l144-87.9a16,16,0,0,0,0-27.4Z" />
    </svg>
  );
};

const Nav = () => {
  return (
    <svg
      className="w-full h-full fill-txprim"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M13.807 8.771l4.768-3.302-1.415-2.042c-.644-.928-1.678-1.427-2.727-1.427-.651 0-1.309.191-1.884.59l-2.045 1.415 3.303 4.766zm-5.184 5.609l3.302 4.767c1.286 1.857 3.353 2.853 5.452 2.853 3.628 0 6.623-2.944 6.623-6.634 0-1.302-.383-2.617-1.181-3.768l-3.301-4.765-10.895 7.547zm.52-9.431l-2.04 1.416c-1.506 1.042-1.881 3.106-.838 4.61l1.413 2.043 4.768-3.302-3.303-4.767zm-1.646 5.171c-.57-.823-.369-1.948.461-2.522l.807-.56 1.593 2.299-2.3 1.593-.561-.81zm-3.321-2.231l-2.499-1.74.62-.891 2.271 1.582c-.169.332-.3.681-.392 1.049zm.702 4.006l-2.299 1.615-.624-.888 2.414-1.699c.135.338.299.665.509.972zm-.778-1.906h-3.1v-1.085h3.029c-.013.366.005.729.071 1.085z" />
    </svg>
  );
};
