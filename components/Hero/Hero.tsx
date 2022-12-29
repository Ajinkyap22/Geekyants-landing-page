import React from "react";
import Image from "next/image";

import Logo from "public/images/logo.svg";

const Hero = () => {
  return (
    <section className="overflow-x-hidden relative">
      <div className="container xl:mx-auto px-4 md:px-12 flex flex-col justify-center mt-28 md:mt-44">
        {/* title */}
        <div className="z-10">
          <h1 className="text-6xl lg:text-8xl leading-tight font-bold">
            Research.
          </h1>
          <h1 className="text-6xl lg:text-8xl leading-tight font-bold">
            Collaborate.
          </h1>
          <h1 className="text-6xl lg:text-8xl leading-tight font-bold">
            Build.
          </h1>
        </div>

        {/* description */}
        <p className="text-2xl lg:text-4xl font-light lg:w-2/3 xl:w-1/2 mt-8 md:mt-20 z-10 !leading-normal">
          Design & development studio turning ideas into{" "}
          <span>mobile apps.</span>
        </p>

        {/* menu */}
        <ul className="flex items-center mt-8 md:mt-24">
          {/* let's talk */}
          <li>
            <button className="p-2 mr-3 px-6 md:px-10 rounded bg-primary text-white text-sm md:text-base font-bold">
              LET'S TALK
            </button>
          </li>

          {/* products */}
          <li className="hidden lg:block">
            <button className="p-2 mx-3 text-xl text-[#34333a] hover:text-primary transition-colors tracking-wider">
              Products
            </button>
          </li>

          {/* services */}
          <li className="hidden lg:block">
            <button className="p-2 mx-3 text-xl text-[#34333a] hover:text-primary transition-colors tracking-wider">
              Services
            </button>
          </li>

          {/* our work */}
          <li className="hidden lg:block">
            <button className="p-2 mx-3 text-xl text-[#34333a] hover:text-primary transition-colors tracking-wider">
              Our Work
            </button>
          </li>

          {/* solutions */}
          <li className="hidden lg:block">
            <button className="p-2 mx-3 text-xl text-[#34333a] hover:text-primary transition-colors tracking-wider">
              Solutions
            </button>
          </li>

          {/* more */}
          <li className="hidden lg:block">
            <button className="p-2 text-lg text-[#34333a] hover:text-primary transition-colors tracking-wider">
              More
            </button>
          </li>
        </ul>
      </div>

      {/* logo */}
      <Image
        src={Logo}
        alt="GeekyAnts Logo"
        className="absolute right-[-10%] md:right-0 xl:right-[-10%] max-w-[50%] md:max-w-[75%] top-0 mt-[-10%] xl:max-w-[50%]"
      />
    </section>
  );
};

export default Hero;
