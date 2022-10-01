import Button from "@presentation/common/Button";
import * as React from "react";

import { MdLocationPin } from "react-icons/md";
import { AnimatePresence, motion, useScroll } from "framer-motion";

const Devfolio = () => {
  const [hidden, setHidden] = React.useState<boolean>(false);

  const { scrollY } = useScroll();

  scrollY.onChange((s) => {
    if (s > 500) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95],
        delay: 2,
      }}
      className="z-[9999] font-montserrat fixed lg:left-[120px] top-0 text-white bg-primary-light p-[12px] rounded-b-[10px] min-w-[220px]"
    >
      {!hidden && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 110 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.5,
            }}
          >
            <h2 className="font-black text-[22px]">Oct. 27 & 28</h2>
            <p className="text-[16px] font-medium">Offline</p>
            <p className="flex items-center text-[14px] font-medium mt-[10px] mb-[15px]">
              <MdLocationPin size="2em" color="#FFFFFF" /> CITTIC, CUSAT
            </p>
          </motion.div>
        </AnimatePresence>
      )}
      <Button
        className="font-source-sans-pro text-[16px] font-bold bg-devfolio flex items-center rounded-[5px]"
        href="https://makeaton.devfolio.co"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/icons/devfolio.svg"
          alt="Devfolio Logo"
          height={20}
          width={20}
        />{" "}
        <span className="ml-[6px]">Register on Devfolio</span>
      </Button>
    </motion.div>
  );
};

export default Devfolio;
