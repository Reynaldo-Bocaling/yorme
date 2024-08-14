import React from "react";
import aboutAnimation from "../assets/animation-json/about.json";
import Lottie from "lottie-react";
const About = () => {
  return (
    <section id="about" className="relative w-full ">
      <div className="container mx-auto flex flex-col items-center justify-start pt-20 md:pt-32 md:pb-20">
        <h1 className="title-section text-5xl md:text-8xl">ABOUT US</h1>
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:gap-4 -mt-16">
          <Lottie
            animationData={aboutAnimation}
            className="w-full md:w-3/5 mt-7 md:mt-0"
          />
          <div className="about-content w-full md:w-2/5 h-[50rem] md:h-[40rem] bg-red-500 flex items-center justify-center pl-9 pr-20 md:pl-16 md:pr-32 pt-20 translate-x-5 -translate-y-10 md:-translate-y-0 md:translate-x-0">
            <p className="text-lg text-center text-white font-light tracking-wider bg-red-500s">
              Tsutsuji is a meme coin project that is being developed, inspired
              by the "Queen of the Kabosu family" - a character associated with
              the Kabosu/Doge meme. The project aims to create a new
              cryptocurrency token. <br /> <br />
              Tsutsuji is a meme coin project that is being developed, inspired
              by the "Queen of the Kabosu family" - a character associated with
              the Kabosu/Doge meme. The project aims to create a new
              cryptocurrency token.
            </p>
          </div>
        </div>
      </div>
      <img
        src="/img/cloud-footer-violet.png"
        className="relative w-full -mt-32 z-20 translate-y-5 md:translate-y-20"
        alt=""
      />
      <img
        src="/img/about-bg-gif.gif"
        className="absolute top-0 left-0 w-full h-full z-[-1] "
        alt=""
      />
    </section>
  );
};

export default About;
