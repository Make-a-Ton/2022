import * as React from "react";

interface Props {
  title: string;
  description: React.ReactNode;
  timing: string;
  num: number;
}

const TimelinePoint = ({ title, description, timing, num }: Props) => {
  return (
    <div className={`grid grid-cols-2 mb-[24px]`}>
      {num % 2 === 0 && <div></div>}
      <div
        className={`text-white transform flex items-center justify-start ${
          num % 2 === 0
            ? "flex-row translate-x-[-13px]"
            : "flex-row-reverse translate-x-[13px]"
        }`}
      >
        <div className="relative h-full">
          <span className="transform translate-y-[5px] rounded-full bg-white h-[26px] w-[26px] flex items-center justify-center">
            <span className="rounded-full bg-primary-dark p-[10px] h-[20px] w-[20px]"></span>
          </span>
          <span className="absolute h-[200%] w-[4px] z-[-1] rounded-full bg-white right-[11px]"></span>
        </div>
        <div className="flex flex-col px-[30px]">
          <h4 className="text-[24px] font-semibold">
            {title},{" "}
            <span className="font-normal italic text-gray-300">{timing}</span>
          </h4>
          {description && <div>{description}</div>}
        </div>
      </div>
      {num % 2 === 1 && <div></div>}
    </div>
  );
};

export default TimelinePoint;
