import Button from "@presentation/common/Button";
import Image from "next/image";
import * as React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [scrollVal, setScrollVal] = React.useState<number>();

  const Images: string[] = ["/assets/loading-1.jpeg", "/assets/loading-2.jpeg"];

  const ImageArray: string[] = [
    ...Images,
    ...Images,
    ...Images,
    ...Images,
    ...Images,
    ...Images,
    ...Images,
  ];

  return (
    <section className="pt-[250px] h-full z-[10] min-h-screen ">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* <img
        className="z-[-1] top-0 left-0 absolute h-full w-full object-cover object-center"
        src="/assets/hero-bg.svg"
        alt=""
      /> */}
      <div className="flex flex-col items-center relative px-[32px] md:px-[64px] lg:px-[120px] ">
        <div className="flex items-end">
          <Image
            src="/assets/sponsors/cittic.svg"
            height={32}
            width={133}
            alt="CITTIC"
          />
          <span className="ml-[8px] text-white text-[18px]">Presents</span>
        </div>
        <div className="font-montserrat relative transform translate-x-[-3em]">
          <h1 className="relative gradient-hero gradient-text text-[96px] font-black">
            Make-a-ton
          </h1>
          <span className="absolute font-semibold text-[72px] right-[-1.6em] top-[-0.1em] text-primary-light z-[10]">
            5.o
          </span>
        </div>
        <p className="font-black uppercase text-white text-[20px]">
          A 24 HOUR HACKATHON TO EMBRACE THE SPIRIT OF INNOVATION
        </p>
        <Button
          className="font-source-sans-pro text-[16px] font-bold bg-devfolio flex items-center rounded-[5px] mt-[15px] text-white"
          href="https://makeaton.devfolio.co"
        >
          <Image
            src="/assets/icons/devfolio.svg"
            alt="Devfolio Logo"
            height={20}
            width={20}
          />{" "}
          <span className="ml-[6px]">Register on Devfolio</span>
        </Button>
      </div>
      {/* <motion.div variants={banner}>
        <MarqueeRow title={"Make-a-ton"} />
      </motion.div> */}
    </section>
  );
};

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const AnimatedLetters = ({ title, disabled }: any) => (
  <motion.span
    className="row-title"
    variants={disabled ? undefined : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, key) => (
      <motion.span
        key={key}
        className="row-letter"
        variants={disabled ? undefined : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const MarqueeRow = ({ title, playMarquee }: any) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className="marquee__inner"
      >
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  );
};

export default Hero;
