import React from "react";

const Prize = ({ sponsor, amount }: { sponsor: string; amount: string }) => {
  return (
    <div className="border-2 p-4 m-4 border-white min-w-[612px]">
      <div className="flex justify-between">
        <p className="font-medium text-2xl text-white">{sponsor}</p>
        <p className="font-medium text-2xl text-white">{amount}</p>
      </div>
    </div>
  );
};

export default Prize;
