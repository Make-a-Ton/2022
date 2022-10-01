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
          {loading ? (
            <motion.div key="loader" className="overflow-hidden">
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <Hero />

              <Reasons />
              <Schedule />
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
