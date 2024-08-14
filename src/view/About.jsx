import React from "react";
import aboutAnimation from "../assets/animation-json/about.json";
import Lottie from "lottie-react";
const About = () => {
  return (
    <section id="about" className="relative w-full ">
      <div className="container mx-auto flex flex-col items-center justify-start pt-32 md:pb-20">
        <h1 className="title-section text-5xl md:text-8xl">ABOUT US</h1>
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:gap-4 -mt-20">
          <Lottie
            animationData={aboutAnimation}
            className="w-full md:w-3/5 mt-5 md:mt-0"
          />
          <div className="about-content w-full md:w-2/5 h-[50rem] md:h-[40rem] bg-red-500 flex items-center justify-center pl-9 pr-20 md:pl-16 md:pr-32 pt-20 translate-x-5 -translate-y-10 md:-translate-y-0 md:translate-x-0">
            <p className="text-lg text-center text-white font-light tracking-wider bg-red-500s">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio libero assumenda laboriosam in at optio obcaecati nemo
              sit eligendi odio. Ullam aperiam laudantium aspernatur
              necessitatibus earum! Sed delectus doloribus, sequi voluptatum
              repellat reprehenderit autem eum aliquam vitae laborum aspernatur
              corporis quas quod beatae? Illum dolorum deserunt quae quia eos!
              Explicabo officia ratione neque nihil repudiandae voluptas nulla
              esse assumenda eveniet.
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
