import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.55,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({
  setLoading,
}: {
  setLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-primary-dark">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        className="relative w-full h-full flex items-center justify-center"
        onAnimationComplete={() => setLoading(false)}
      >
        <motion.img
          src="/assets/loading-main.png"
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
          }}
          variants={itemMain}
          layoutId="main-image"
          className="h-[400px]"
        />
        <motion.div
          animate={{
            scale: 0.5,
            transition: {
              duration: 1,
            },
          }}
          variants={item}
          className="absolute left-[10%] top-[15%]"
        >
          <Image
            src="/assets/loading-1.jpeg"
            height={200}
            width={400}
            objectFit="cover"
            className="rounded top-[50%]"
            alt=""
          />
        </motion.div>
        <motion.div
          animate={{
            scale: 0.5,
            transition: {
              duration: 1,
            },
          }}
          variants={item}
          className="absolute right-[10%] bottom-[15%] z-[2]"
        >
          <Image
            src="/assets/loading-2.jpeg"
            height={200}
            width={400}
            objectFit="cover"
            className="rounded top-[50%]"
            alt=""
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
