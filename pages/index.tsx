import type { NextPage } from "next";

import Devfolio from "@presentation/Devfolio";
import Reasons from "@presentation/Reasons";
import Image from "next/image";
import Button from "@presentation/common/Button";
import Schedule from "@presentation/Schedule";

// import HeroBG from "@public/assets/hero-bg.svg";

const Home: NextPage = () => {
  return (
    <>
      <section className="flex flex-col pt-[250px] items-center h-full z-[10] z-1 min-h-screen relative px-[32px] md:px-[64px] lg:px-[120px] ">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="z-[-1] top-0 left-0 absolute h-full w-full object-cover object-center"
          src="/assets/hero-bg.svg"
          alt=""
        />
        <div className="flex items-end">
          <Image
            src="/assets/sponsors/cittic.svg"
            height={32}
            width={133}
            alt="CITTIC"
          />
          <span className="ml-[8px] text-white text-[18px]">Presents</span>
        </div>
        <div className="font-montserrat relative transform translate-x-[-3em]">
          <h1 className="relative gradient-hero gradient-text text-[96px] font-black">
            Make-a-ton
          </h1>
          <span className="absolute font-semibold text-[72px] right-[-1.6em] top-[-0.1em] text-primary-light z-[10]">
            5.o
          </span>
        </div>
        <p className="font-black uppercase text-white text-[20px]">
          A 24 HOUR HACKATHON TO EMBRACE THE SPIRIT OF INNOVATION
        </p>
        <Button
          className="font-source-sans-pro text-[16px] font-bold bg-devfolio flex items-center rounded-[5px] mt-[15px] text-white"
          href="https://makeaton.devfolio.co"
        >
          <Image
            src="/assets/icons/devfolio.svg"
            alt="Devfolio Logo"
            height={20}
            width={20}
          />{" "}
          <span className="ml-[6px]">Register on Devfolio</span>
        </Button>
      </section>
      <Devfolio />
      <Reasons />
      <Schedule />
    </>
  );
};

export default Home;
