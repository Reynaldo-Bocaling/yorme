import React from "react";
import Header from "../components/header";

const Hero = () => {
  return (
    <section id="heros" className="relative w-full bg-sky-blue">
      <Header />
      <div className="container mx-auto relative  flex flex-col items-center justify-start z-20">
        <h1 className="text-stroke-xl text-yellow-10 text-[9rem] md:text-[22rem] font-bold leading-[8rem]  md:leading-[15rem]">
          yorme
        </h1>
        <img
          src="/img/hero.png"
          className="w-[25rem] -mt-14 md:-mt-32"
          alt=""
        />
      </div>
      <img
        src="/img/cloud-footer-white.png"
        className="relative w-full -mt-24 z-20 translate-y-20"
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
