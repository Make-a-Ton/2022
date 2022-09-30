import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="border-2 border-white w-[612px] p-4">
      <div className=" flex justify-between items-center">
        <p className="text-white font-bold text-2xl leading-[30px]">
          Question?
        </p>
        <IoChevronDown
          onClick={() => setExpanded(!expanded)}
          className={`cursor-pointer text-2xl text-[#38E769] ${
            expanded ? "rotate-0" : "-rotate-90"
          }`}
        />
      </div>
      <div className={`transition-all duration-300`}>
        <p className={`${expanded ? "flex" : "hidden"} py-4 text-white`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque velit
          placeat voluptas quisquam, ipsa a porro distinctio id. Ratione iusto
          et, voluptatem quaerat aliquid nemo pariatur commodi ab consectetur
          necessitatibus!
        </p>
      </div>
    </div>
  );
};

export default FAQ;
