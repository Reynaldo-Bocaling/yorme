import React from "react";
import aboutAnimation from "../assets/animation-json/social.json";
import Lottie from "lottie-react";
import { socials } from "../constant";
const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-dark-violet ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center pb-7 md:pb-0">
        <Lottie animationData={aboutAnimation} className="w-full md:w-1/2" />
        <div className="w-full md:w-1/2">
          <h1 className="title-section md:w-[32rem] text-5xl md:text-8xl text-center ">
            JOIN US
          </h1>
          <div className="flex items-center justify-between md:w-[32rem] gap-2 px-7 mt-5">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="p-3 rounded-full bg-[#7017b5]"
              >
                <img
                  src={item.img}
                  className="w-10 h-10 md:w-12 md:h-12"
                  alt=""
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
