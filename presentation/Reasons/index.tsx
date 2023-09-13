import BulletPoints from "@presentation/common/BulletPoints";
import { Prizes, ReasonsContent } from "@presentation/common/Contents";
import Prize from "@presentation/common/Prize";
import React from "react";

const Reasons = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col justify-between">
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="overflow-hidden z-[-1] absolute"
        src="/assets/reasons-bg.svg"
        alt="reasons-illustration"
      />
      <div className="pt-[120px] mx-auto w-full max-w-[1440px] px-[32px] md:px-[64px] lg:px-[120px]">
        <h2 className="font-montserrat font-extrabold leading-[50px] md:leading-[78px] text-4xl md:text-6xl gradient-primary gradient-text">
          Reasons to join
        </h2>
        <h3 className="text-white leading-[30px] md:leading-[50px] z-20 font-bold text-2xl  md:text-4xl uppercase pb-[10px]">
          Make-A-Ton 6.0
        </h3>
        {ReasonsContent.map((item, key) => (
          <BulletPoints key={key}>{item}</BulletPoints>
        ))}
      </div>
    </div>
  );
};

export default Reasons;
