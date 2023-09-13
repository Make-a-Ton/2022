import { TeamDetails } from "@presentation/common/Contents";
import TeamCard from "@presentation/common/TeamCard";
import Devfolio from "@presentation/Devfolio";
import HeadMeta from "@presentation/HeadMeta";
import {
  AnimatePresence,
  useMotionValue,
  motion,
  Variants,
} from "framer-motion";
import { NextPage } from "next";
import * as React from "react";
import { ScrollerMotion, ScrollerMotionRef } from "scroller-motion";

const Team: NextPage = () => {
  const scrollerMotion = React.useRef<ScrollerMotionRef>();
  const scrollY = useMotionValue(0);

  React.useEffect(() => {
    const unsubscribe = scrollerMotion!.current!.scrollY.onChange((v) =>
      scrollY.set(v)
    );

    return () => unsubscribe();
  }, [scrollY]);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.5,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <AnimatePresence>
      <ScrollerMotion ref={scrollerMotion}>
        <HeadMeta
          title="Make-a-ton 5.0 | CITTIC"
          description="A 24 hour flagship hackathon from Cochin University of Science and Technology
        for University students to embrace the spirit of innovation."
          image="https://makeaton.in/ograph.jpg"
          url="https://makeaton.in"
          keywords="hackathon, makeaton, event"
        />
        <section className="relative pt-[200px] h-full z-[10] min-h-screen  mx-auto max-w-[1440px] px-[32px] md:px-[64px] lg:px[120px]">
          <div className="flex flex-col relative px-[32px] md:px-[64px] lg:px-[120px] ">
            <motion.p
              variants={item}
              className="font-black uppercase text-white text-[20px]"
            >
              MAKE-A-TON 5.0
            </motion.p>
            <h1 className="font-montserrat relative gradient-hero gradient-text md:leading-[59px] text-[48px] md:text-[72px] font-black">
              Meet the team
            </h1>
            <motion.div
              initial="hidden"
              animate="show"
              variants={container}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] my-[60px] mb-[120px]"
            >
              {TeamDetails.map(
                ({ name, photo, github, linkedin, twitter }, key) => (
                  <motion.div key={key} variants={item}>
                    <TeamCard {...{ name, photo, github, linkedin, twitter }} />
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </section>
      </ScrollerMotion>
    </AnimatePresence>
  );
};

export default Team;
