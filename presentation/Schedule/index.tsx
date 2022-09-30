import TimelinePoint from "@presentation/common/TimelinePoint";

import { HiLocationMarker } from "react-icons/hi";

const Schedule = () => {
  return (
    <section className="py-[120px] bg-primary-dark max-w-[1440px] px-[32px] md:px-[64px] lg:px-[120px] flex flex-col items-center">
      <h2 className="font-montserrat font-extrabold leading-[78px] text-6xl gradient-primary gradient-text">
        Schedule
      </h2>
      <div className="flex flex-col mt-[60px]">
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
      </div>
    </section>
  );
};

export default Schedule;
