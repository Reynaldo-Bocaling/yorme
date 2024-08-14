import React from "react";
import Header from "../components/header";

const Hero = () => {
  return (
    <section id="heros" className="relative w-full bg-sky-blue">
      <Header />
      <div className="container mx-auto relative  flex flex-col items-center justify-start z-20 pt-14">
        <h1 className="text-stroke-xl text-yellow-10 text-[8rem] md:text-[22rem] font-bold leading-[8rem]  md:leading-[15rem]">
          $TSUJI
        </h1>
        <img
          src="/img/hero.png"
          className="w-[35rem] md:w-[40rem]  md:-mt-24 -translate-x-10 md:-translate-x-20"
          alt=""
        />
      </div>
      <img
        src="/img/cloud-footer-white.png"
        className="relative w-full -mt-20 md:-mt-64 z-20 translate-y-5 md:translate-y-20"
        alt=""
      />
      <img
        src="/img/hero-bg.jpg"
        className="absolute top-0 left-0 w-full h-full z-10 opacity-25"
        alt=""
      />
    </section>
  );
};

export default Hero;
