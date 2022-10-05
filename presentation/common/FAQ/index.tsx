import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";

const rotateVariants = {
  rotate: {
    rotate: -180,
  },
  stop: {
    rotate: 90,
  },
};

const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const [questionHeight, setQuestionHeight] = useState<number>(0);

  const questionTitle = React.useRef<any>(null);
  const questionAnswer = React.useRef<any>(null);

  React.useEffect(() => {
    setHeight(
      questionTitle?.current?.clientHeight +
        questionAnswer?.current?.clientHeight +
        32
    );
    setQuestionHeight(questionTitle?.current?.clientHeight + 40);
  }, [questionAnswer]);

  const variants = {
    rotate: {
      height,
    },
    stop: {
      height: questionHeight,
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div variants={item}>
      <motion.div
        animate={expanded ? "rotate" : "stop"}
        variants={variants}
        transition={{
          duration: 0.3,
        }}
        className="border-2 h-full bg-primary-dark border-white w-full p-4 mb-[20px] cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className=" flex justify-between items-center" ref={questionTitle}>
          <p className="text-white font-bold text-md md:text-2xl leading-[30px]">
            {question}
          </p>
          <motion.span
            variants={rotateVariants}
            animate={expanded ? "rotate" : "stop"}
          >
            <IoChevronDown
              className={`cursor-pointer text-2xl text-[#38E769] ${
                expanded ? "rotate-0" : "-rotate-90"
              }`}
            />
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={expanded ? "rotate" : "stop"}
          variants={{
            rotate: {
              opacity: 1,
            },
            stop: {
              opacity: 0,
            },
          }}
          exit={{ opacity: 0 }}
          ref={questionAnswer}
        >
          <p className={`py-4 text-white `}>{answer}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FAQ;
