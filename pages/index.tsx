import type { NextPage } from "next";

import Devfolio from "@presentation/Devfolio";
import Reasons from "@presentation/Reasons";
import Schedule from "@presentation/Schedule";
import Sponsors from "@presentation/Sponsors";
import Hero from "@presentation/Hero";
import { useEffect, useRef, useState } from "react";
import Loader from "@presentation/Loader";

import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  useMotionValue,
} from "framer-motion";
import { ScrollerMotion, ScrollerMotionRef } from "scroller-motion";
import FAQ from "@presentation/FAQ";
import HeadMeta from "@presentation/HeadMeta";

// import HeroBG from "@public/assets/hero-bg.svg";

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const scrollerMotion = useRef<ScrollerMotionRef>();
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = scrollerMotion!.current!.scrollY.onChange((v) =>
      scrollY.set(v)
    );

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <AnimateSharedLayout>
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
          {loading ? (
            <motion.div key="loader" className="overflow-hidden">
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <Hero />
              <Reasons />
              {/* <Schedule /> */}
              <Sponsors />
              <FAQ />
            </>
          )}
        </ScrollerMotion>
        {!loading && <Devfolio />}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default Home;
