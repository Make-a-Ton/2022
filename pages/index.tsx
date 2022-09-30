import type { NextPage } from "next";

import Default from "@presentation/Layouts/Default";
import Devfolio from "@presentation/Devfolio";

import HeroBG from "@public/assets/hero-bg.svg";

const Home: NextPage = () => {
  return (
    <>
      <Default
        extra={
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="absolute h-full w-full"
            src="/assets/hero-bg.svg"
            alt=""
          />
        }
      >
        <main className="h-full">
          <h1>Hello there</h1>
          <Devfolio />
        </main>
      </Default>
    </>
  );
};

export default Home;
