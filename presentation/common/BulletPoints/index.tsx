import React from "react";

interface Props {
  children: React.ReactNode;
}

const BulletPoints = ({ children }: Props) => {
  return (
    <div className="flex  items-center py-3">
      <div className="w-3 h-3 rotate-45 bg-white mr-5" />
      <p className="text-white z-20 text-xl">{children}</p>
    </div>
  );
};

export default BulletPoints;
