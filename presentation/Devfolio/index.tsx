import Button from "@presentation/common/Button";
import Image from "next/image";
import * as React from "react";

import { MdLocationPin } from "react-icons/md";

const Devfolio = () => {
  return (
    <div className="z-[9999] font-montserrat fixed lg:left-[120px] top-0 text-white bg-primary-light p-[12px] rounded-b-[10px] min-w-[220px]">
      <h2 className="font-black text-[22px]">Oct. 27 & 28</h2>
      <p className="text-[16px] font-medium">Offline</p>
      <p className="flex items-center text-[14px] font-medium mt-[10px]">
        <MdLocationPin size="2em" color="#FFFFFF" /> CITTIC, CUSAT
      </p>
      <Button className="font-source-sans-pro text-[16px] font-bold bg-devfolio flex items-center rounded-[5px] mt-[15px]">
        <Image
          src="/assets/icons/devfolio.svg"
          alt="Devfolio Logo"
          height={20}
          width={20}
        />{" "}
        <span className="ml-[6px]">Register on Devfolio</span>
      </Button>
    </div>
  );
};

export default Devfolio;
