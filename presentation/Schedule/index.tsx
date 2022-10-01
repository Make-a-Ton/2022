import TimelinePoint from "@presentation/common/TimelinePoint";

import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";

const Schedule = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <section className="bg-primary-dark w-full">
      <div className="py-[120px] mx-auto w-full max-w-[1440px] px-[32px] md:px-[64px] lg:px-[120px] flex flex-col items-center">
        <h2 className="font-montserrat font-extrabold leading-[78px] text-6xl gradient-primary gradient-text">
          Schedule
        </h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: false, amount: 0.35 }}
          className="flex flex-col mt-[60px]"
        >
          {Array(10)
            .fill(null)
            .map((_, key) => (
              <TimelinePoint
                title="Reporting at the venue"
                description={
                  <div className="flex items-center text-gray-300">
                    <HiLocationMarker size={22} />{" "}
                    <span className="ml-[10px] text-[24px]">CITTIC, CUSAT</span>
                  </div>
                }
                timing="8:30AM - 9:00AM"
                num={key}
                key={key}
              />
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
