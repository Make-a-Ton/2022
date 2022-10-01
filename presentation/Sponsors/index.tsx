import * as React from "react";
import { motion } from "framer-motion";

const platinumSponsors = [
  "/assets/sponsors/Devfolio.png",
  "/assets/sponsors/Polygon.png",
  "/assets/sponsors/cittic.svg",
];

const goldSponsors = [
  "/assets/sponsors/Solana.png",
  "/assets/sponsors/Tezos.png",
  "/assets/sponsors/Replit.png",
];

const Sponsors = () => {
  return (
    <section className="py-[60px] md:py-[120px] mx-auto w-full max-w-[1440px] px-[32px] md:px-[64px] lg:px-[120px] flex flex-col items-center">
      <h2 className="text-center font-montserrat font-extrabold leading-[78px] text-6xl gradient-primary gradient-text">
        Sponsors
      </h2>
      <h3 className="text-center font-montserrat font-extrabold leading-[59px] text-[48px] gradient-platinum gradient-text mt-[60px]">
        Platinum Sponsors
      </h3>
      <SponsorsRow sponsors={platinumSponsors} />
      <h3 className="text-center font-montserrat font-extrabold leading-[59px] text-[48px] gradient-gold gradient-text mt-[60px]">
        Gold Sponsors
      </h3>
      <SponsorsRow sponsors={goldSponsors} />
      {/* <h3 className="text-center font-montserrat font-extrabold leading-[59px] text-[48px] gradient-silver gradient-text mt-[60px]">
        Silver Sponsors
      </h3>
      <h3 className="text-center font-montserrat font-extrabold leading-[59px] text-[48px] gradient-community gradient-text mt-[60px]">
        Community Sponsors
      </h3> */}
    </section>
  );
};

const SponsorsRow = ({ sponsors }: { sponsors: string[] }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: false, amount: 0.35 }}
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[30px]"
    >
      {sponsors.map((sponsor) => (
        <motion.div
          variants={item}
          className="duration-150 ease-linear transform hover:scale-105 py-[40px] px-[20px] shadow-xl rounded flex items-center justify-center bg-primary-dark"
          key={sponsor}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={sponsor}
            alt={sponsor}
            className="h-[50px]  object-contain"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Sponsors;
