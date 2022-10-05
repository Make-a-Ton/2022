/* eslint-disable @next/next/no-img-element */
import Button from "@presentation/common/Button";
import * as React from "react";

import { MdLocationPin } from "react-icons/md";
import { AnimatePresence, motion, useScroll } from "framer-motion";

const Devfolio = () => {
  const [hidden, setHidden] = React.useState<boolean>(false);

  const { scrollY } = useScroll();

  scrollY.onChange((s) => {
    if (typeof window !== "undefined" && window.innerWidth > 720) {
      if (s > 500) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  // React.useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://apply.devfolio.co/v2/sdk.js";
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

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
      className="z-[9999] font-montserrat fixed lg:left-[120px] bottom-0 md:bottom-auto w-full md:w-fit md:top-0 text-white bg-primary-light p-[20px] md:p-[12px] md:rounded-b-[10px] min-w-[220px]"
    >
      {typeof window !== "undefined" && (window.innerWidth < 720 || !hidden) && (
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
        className="font-source-sans-pro text-[20px] h-[44px] w-[312px] font-[500] bg-[#3770ff] flex items-center justify-center rounded-[4px]"
        href="https://makeaton-5.devfolio.co"
      >
        <img
          src="/assets/icons/devfolio.svg"
          alt="Devfolio Logo"
          height={20}
          width={20}
        />{" "}
        <span className="ml-[6px]">Apply with Devfolio</span>
      </Button>
      {/* <div
        className="apply-button"
        data-hackathon-slug="makeaton-5"
        data-button-theme="light"
        style={{ height: "44px", width: "312px" }}
      ></div> */}
    </motion.div>
  );
};

export default Devfolio;
