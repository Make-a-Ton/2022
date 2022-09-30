import React from "react";

const Prize = ({
  sponsor,
  amount,
  byDevfolio = false,
}: {
  sponsor: string;
  amount: string;
  byDevfolio: boolean;
}) => {
  return (
    <div className="border-2 p-4 border-white w-full">
      <div className="flex justify-between">
        <p className="font-medium text-2xl text-white">
          {sponsor}
          {byDevfolio && "*"}
        </p>
        <p className="font-medium text-2xl text-white">{amount}</p>
      </div>
    </div>
  );
};

export default Prize;
