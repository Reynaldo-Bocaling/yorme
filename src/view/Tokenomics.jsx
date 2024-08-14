import React from "react";
import tokenomicsAnimation from "../assets/animation-json/tokenomics.json";
import Lottie from "lottie-react";
import { tokenomics } from "../constant";
import { LuCopy } from "react-icons/lu";
const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative w-full  pt-28 ">
      <div className="container mx-auto relative  flex flex-col items-center justify-center">
        <h1 className="title-section text-5xl md:text-8xl">TOKENOMICS</h1>
        <Lottie
          animationData={tokenomicsAnimation}
          className="w-[20rem] md:w-[30rem] -mt-16"
        />

        <ul className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-7 md:gap-0 w-full">
          {tokenomics.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-center gap-3"
            >
              <h1 className="text-stroke-md text-yellow-10 text-5xl md:text-6xl">
                {item.value}
              </h1>
              <h1 className="text-stroke-md text-white text-4xl">
                {item.name}
              </h1>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-5 mt-12">
          <h1 className="shadow-effect text-sm md:text-xl text-yellow-10 tracking-wider bg-[#04205E] border-2 border-black rounded-lg py-2 px-9">
            0x665DD8C8823FZ8DHBZ6789XA
          </h1>
          <h1 className="shadow-effect text-base md:text-2xl text-yellow-10 tracking-wider bg-[#04205E] border-2 border-black rounded-lg py-2 px-4">
            <LuCopy />
          </h1>
        </div>

        {/* floating content */}
        <img
          src="/img/moon.png"
          className="absolute -left-12 -top-24 md:top-28 md:left-20 w-[7rem] md:w-[15rem]"
          alt=""
        />
      </div>

      {/* backghround & floating content */}

      <img
        src="/img/planet.png"
        className="absolute -top-12 right-0 w-[8rem] md:w-[18rem]"
        alt=""
      />
      <img
        src="/img/earth.png"
        className="absolute bottom-0 md:bottom-20 right-0 w-[7rem] md:w-[15rem]"
        alt=""
      />
      <img
        src="/img/tokenomics-bg.gif"
        className="absolute top-0 left-0 w-full h-full z-[-1] "
        alt=""
      />
      <img
        src="/img/cloud-footer-blue.png"
        className="relative w-full z-20 mt-12 translate-y-5 md:translate-y-20"
        alt=""
      />
    </section>
  );
};

export default Tokenomics;
