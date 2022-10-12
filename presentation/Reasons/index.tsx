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
          Make-A-Ton 5.0
        </h3>
        {ReasonsContent.map((item, key) => (
          <BulletPoints key={key}>{item}</BulletPoints>
        ))}
      </div>
      <div className="py-[60px] md:py-[120px] mx-auto w-full max-w-[1440px] px-[32px] md:px-[64px] lg:px-[120px]">
        <div className="flex justify-end">
          <h2 className="font-montserrat leading-[50px] md:leading-[78px] text-4xl md:text-6xl font-extrabold  gradient-primary gradient-text">
            Prizes worth ₹400K+
          </h2>
        </div>
        <div className="flex flex-col mt-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
            {Prizes.map(({ sponsor, amount, byDevfolio }, key) => (
              <Prize
                key={key}
                sponsor={sponsor}
                amount={amount}
                byDevfolio={byDevfolio}
              />
            ))}
          </div>
          <div className="pt-[60px] flex flex-col">
            <p className="text-white text-lg md:text-2xl pb-[10px]">
              Swags from Make-a-ton, GDG Cloud, GitHub, GCP, AWS and more!
            </p>
            <p className="text-white text-lg md:text-2xl pb-[10px]">
              Eligibility to apply for internships and full-time roles at
              Polygon & Replit!
            </p>
            <small className="text-white text-md md:text-lg">
              * - Prizes given by Devfolio
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
