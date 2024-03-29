import Button from "@presentation/common/Button";
import * as React from "react";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
        delayChildren: 2.6,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative pt-[250px] h-full z-[10] min-h-screen">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        className="z-[-1] top-0 left-0 absolute h-full w-full object-cover object-center"
        src="/assets/loading-main.png"
        layoutId="main-image"
        transition={{
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1.6,
        }}
      />
      <motion.div
        className="bg-[#000c] absolute top-0 left-0 h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1.6,
          delay: 1,
        }}
      ></motion.div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="flex flex-col items-center relative px-[32px] md:px-[64px] lg:px-[120px] "
      >
        <motion.div variants={item} className="flex items-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/sponsors/cittic.svg"
            height={32}
            width={133}
            alt="CITTIC"
          />
          <span className="ml-[20px] text-white text-[18px]">Presents</span>
        </motion.div>
        <motion.div
          variants={item}
          className="font-montserrat relative transform translate-x-[-3em]"
        >
          <h1 className="relative gradient-hero gradient-text text-[50px] md:text-[96px] font-black">
            Make-a-ton
          </h1>
          <span className="absolute font-semibold text-[18px] md:text-[72px] right-[-1.6em] top-[-0.1em] text-primary-light z-[10]">
            6.o
          </span>
        </motion.div>
        <motion.p
          variants={item}
          className="font-black uppercase text-white text-center text-[20px] mb-10"
        >
          A 24 HOUR HACKATHON TO EMBRACE THE SPIRIT OF INNOVATION
        </motion.p>
        <motion.div variants={item}>
          <motion.div
            className="apply-button"
            data-hackathon-slug="makeaton-5"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></motion.div>
        </motion.div>
        <Button
          className="font-source-sans-pro text-[16px] font-bold bg-devfolio flex items-center rounded-[5px] mt-[15px] text-white"
          href="https://forms.eventsradar.in/makeaton/"
          variants={item}
        >
          <span className="ml-[6px]">Register For Make-a-Ton</span>
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
