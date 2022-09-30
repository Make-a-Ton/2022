import * as React from "react";
import Navbar from "@presentation/Navbar";
import Footer from "@presentation/Footer";
import HeadMeta from "@presentation/HeadMeta";

interface Props {
  children: React.ReactNode;
  extra?: any;
}

const Default = ({ children, extra }: Props) => {
  return (
    <div className="relative flex flex-col bg-primary">
      <Navbar />
      <HeadMeta
        title="Make-a-ton 5.0 | CITTIC"
        description="A 24 hour flagship hackathon from Cochin University of Science and Technology
        for University students to embrace the spirit of innovation."
        image="https://makeaton.in/ograph.jpg"
        url="https://makeaton.in"
        keywords="hackathon, makeaton, event"
      />
      {extra}
      <main className="relative w-full mt-[50px] min-h-[70vh] mb-[100px] mx-auto max-w-[1440px] px-[32px] md:px-[64px] lg:px-[120px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Default;
