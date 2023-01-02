import React from "react";
import Image from "next/image";

import LetsTalk from "components/LetsTalk/LetsTalk";

import Logo from "public/images/logo.svg";

const Hero = () => {
  return (
    <section className="overflow-x-hidden relative">
      <div className="container xl:mx-auto px-8 lg:px-20 2xl:px-40 flex flex-col justify-center mt-28 md:mt-44 pb-20">
        {/* title */}
        <div className="z-10">
          <h1 className="text-6xl lg:text-8xl leading-tight font-bold animate-fade">
            Research.
          </h1>
          <h1 className="text-6xl lg:text-8xl leading-tight font-bold animate-fade-slow">
            Collaborate.
          </h1>
          <h1 className="text-6xl lg:text-8xl leading-tight font-bold animate-fade-slower">
            Build.
          </h1>
        </div>

        {/* description */}
        <div className="text-2xl lg:text-4xl font-light lg:w-2/3 xl:w-1/2 2xl:w-2/5 mt-8 md:mt-20 z-10 !leading-normal">
          Design & development studio turning ideas into
          {/* mobile */}
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn overflow-hidden opacity-0">
              mobile apps.
            </span>
          </div>
          {/* web */}
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-fast overflow-hidden opacity-0">
              web apps.
            </span>
          </div>
          {/* solutions */}
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-normal overflow-hidden opacity-0">
              solutions.
            </span>
          </div>
          {/* reality */}
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-slow overflow-hidden opacity-0">
              reality.
            </span>
          </div>
          {/* open source */}
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-slower overflow-hidden opacity-0">
              open source.
            </span>
          </div>
          {/* apps */}
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-slowest overflow-hidden opacity-0">
              apps.
            </span>
          </div>
        </div>

        {/* menu */}
        <ul className="flex items-center mt-8 md:mt-24 2xl:mt-32">
          {/* let's talk */}
          <li>
            <LetsTalk text="LET'S TALK" />
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
        className="absolute right-[-10%] md:right-0 xl:right-[-10%] 2xl:right-0 max-w-[50%] md:max-w-[75%] top-0 mt-[-10%] xl:max-w-[50%]"
      />
    </section>
  );
};

export default Hero;
