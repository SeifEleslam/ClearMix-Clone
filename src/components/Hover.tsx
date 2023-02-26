import { AnimatePresence, motion, useSpring } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

export const HoverCursor = ({
  show,
  children,
  newClasses,
}: {
  show: boolean;
  children: React.ReactNode;
  newClasses: string;
}) => {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 1000, damping: 100 });
  const y = useSpring(0, { stiffness: 1000, damping: 100 });

  function handleMouse(event: any) {
    const position = getRelativeCoordinates(event, ref.current);
    x.set(position.x);
    y.set(position.y);
  }
  function getRelativeCoordinates(event: any, referenceElement: any) {
    const position = {
      x: event.pageX,
      y: event.pageY,
    };
    const offset = {
      left: referenceElement.offsetLeft,
      top: referenceElement.offsetTop,
    };
    let reference = referenceElement.offsetParent;
    while (reference) {
      offset.left += reference.offsetLeft;
      offset.top += reference.offsetTop;
      reference = reference.offsetParent;
    }
    return {
      x: position.x - offset.left,
      y: position.y - offset.top,
    };
  }

  useLayoutEffect(() => {
    window.addEventListener("pointermove", handleMouse);
    return () => window.removeEventListener("pointermove", handleMouse);
  }, []);

  return (
    <div ref={ref}>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ scale: 0.25, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.25, opacity: 0 }}
            style={{ x, y }}
            className={
              "z-50 pointer-events-none rounded-full absolute w-20 h-20 -m-10" +
              newClasses
            }
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
