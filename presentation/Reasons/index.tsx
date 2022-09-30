import BulletPoints from "@presentation/common/BulletPoints";
import Prize from "@presentation/common/Prize";
import React from "react";

const Reasons = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-primary flex flex-col justify-between py-5">
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-[70%] overflow-hidden z-0 absolute"
        src="/assets/reasons-bg.svg"
        alt="reasons-illustration"
      />
      <div>
        <h1 className="font-extrabold leading-[78px] z-20 w-fit bg-clip-text text-transparent text-6xl bg-gradient-to-r from-[#38E769] via-[#2AD5AC] to-[#1DC4A5]">
          Reasons to join
        </h1>
        <h3 className="text-white leading-[50px] z-20 font-bold text-4xl uppercase">
          Make-A-Ton 5.0
        </h3>
        {[0, 1, 2, 3, 4].map((item) => (
          <BulletPoints key={item}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </BulletPoints>
        ))}
      </div>
      <div className="flex flex-col z-20">
        <div className="flex justify-end">
          <h1 className="leading-[78px] font-extrabold z-20 w-fit bg-clip-text text-transparent text-6xl bg-gradient-to-r from-[#38E769] via-[#2AD5AC] to-[#1DC4A5]">
            Prizes worth $125K+
          </h1>
        </div>
        <div className="flex flex-wrap z-20 w-[75%]  ">
          {[0, 1, 2, 3, 4].map((item) => (
            <Prize key={item} sponsor="Devfolio" amount="$100K" />
          ))}
        </div>
        <small className="text-slate-400 z-20 px-4 text-sm">
          Schwags from Make-a-ton, Replit, GitHub, GCP, AWS and more!
        </small>
        <small className="text-slate-400 z-20 px-4 text-sm">
          Eligibility to apply for internships and full-time roles at Polygon &
          Replit!
        </small>
        <small className="text-slate-400 z-20 px-4 text-sm">
          * - Prizes given by Devfolio
        </small>
      </div>
    </div>
  );
};

export default Reasons;
