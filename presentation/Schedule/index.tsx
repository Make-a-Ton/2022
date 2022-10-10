import TimelinePoint from "@presentation/common/TimelinePoint";

import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
import { ScheduleData } from "@presentation/common/Contents";

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
      <div className="py-[60px] md:py-[120px] mx-auto w-full max-w-[1440px] px-[32px] md:px-[64px] lg:px-[120px] flex flex-col items-center">
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
          {ScheduleData.map(({ title, location, timing, link }, key) => (
            <TimelinePoint
              title={title}
              description={
                <a href={link ?? "https://cittic.cusat.ac.in"} target="__blank">
                  <div className="flex items-center text-gray-300">
                    <HiLocationMarker size={22} />{" "}
                    <span className="ml-[10px] text-[24px]">
                      {location ?? "CITTIC, CUSAT"}
                    </span>
                  </div>
                </a>
              }
              timing={timing}
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
