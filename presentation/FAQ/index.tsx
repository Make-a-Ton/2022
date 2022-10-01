import { motion } from "framer-motion";

import FAQ from "@presentation/common/FAQ";
import { FAQS } from "@presentation/common/Contents";

const FAQs = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="select-none relative pb-[220px] pt-[120px] md:py-[120px] flex flex-col items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="z-[-1] top-0 left-0 absolute h-full w-full object-cover object-center"
        src="/assets/hero-bg.svg"
        alt=""
      />
      <motion.div className="flex flex-col w-full max-w-[1440px] mx-auto px-[32px] md:px-[64px] lg:px-[120px]">
        <motion.h2 className="font-montserrat mb-[60px] font-extrabold leading-[78px] text-6xl gradient-primary gradient-text">
          FAQs
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
        >
          {FAQS.map(({ ques, ans }, key) => (
            <FAQ question={ques} answer={ans} key={key} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQs;
