import React from "react";
import Image from "next/image";

import LetsTalk from "components/LetsTalk/LetsTalk";

import Logo from "public/images/logo.svg";
import { HeroDataType } from "types/heroDataType";

import uniqid from "uniqid";

type Props = {
  data: HeroDataType;
};

const Hero = ({ data }: Props) => {
  return (
    <section className="overflow-x-hidden relative">
      <div className="xl:container xl:mx-auto px-8 lg:px-20 2xl:px-40 flex flex-col justify-center mt-28 md:mt-44 pb-20">
        {/* title */}
        <div className="z-10">
          <h1 className="text-6xl lg:text-8xl leading-tight font-bold animate-fade">
            {data.heading[0]}
          </h1>
          <h1 className="text-6xl lg:text-8xl leading-tight font-bold animate-fade-slow">
            {data.heading[1]}
          </h1>
          <h1 className="text-6xl lg:text-8xl leading-tight font-bold animate-fade-slower">
            {data.heading[2]}
          </h1>
        </div>

        {/* description */}
        <div className="text-2xl lg:text-4xl font-light lg:w-2/3 xl:w-1/2 2xl:w-2/5 mt-8 md:mt-20 z-10 !leading-normal">
          {data.subheading}

          {/* mobile */}
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn overflow-hidden opacity-0">
              {data.subheading_options[0]}
            </span>
          </div>

          {/* web */}
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-fast overflow-hidden opacity-0">
              {data.subheading_options[1]}
            </span>
          </div>

          {/* solutions */}
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-normal overflow-hidden opacity-0">
              {data.subheading_options[2]}
            </span>
          </div>

          {/* reality */}
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-slow overflow-hidden opacity-0">
              {data.subheading_options[3]}
            </span>
          </div>

          {/* open source */}
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-slower overflow-hidden opacity-0">
              {data.subheading_options[4]}
            </span>
          </div>

          {/* apps */}
          <div className="inline pl-2.5 absolute">
            <span className="block whitespace-nowrap animate-slideIn-slowest overflow-hidden opacity-0">
              {data.subheading_options[5]}
            </span>
          </div>
        </div>

        {/* menu */}
        <ul className="flex items-center mt-8 md:mt-24 2xl:mt-32">
          {/* let's talk */}
          <li>
            <LetsTalk text="LET'S TALK" />
          </li>

          {/* nav_links */}

          {/* products */}
          <li className="hidden lg:block">
            <a
              href="#open-source"
              className="p-2 mx-3 text-xl text-nav-link hover:text-primary transition-colors tracking-wider"
            >
              {data.nav_links[0]}
            </a>
          </li>

          {/* services */}
          <li className="hidden lg:block">
            <a
              href="#services"
              className="p-2 mx-3 text-xl text-nav-link hover:text-primary transition-colors tracking-wider"
            >
              {data.nav_links[1]}
            </a>
          </li>

          {/* our work */}
          <li className="hidden lg:block">
            <a
              href="#trusted"
              className="p-2 mx-3 text-xl text-nav-link hover:text-primary transition-colors tracking-wider"
            >
              {data.nav_links[2]}
            </a>
          </li>

          {/* solutions */}
          <li className="hidden lg:block">
            <button className="p-2 mx-3 text-xl text-nav-link hover:text-primary transition-colors tracking-wider">
              {data.nav_links[3]}
            </button>
          </li>

          {/* more */}
          <li className="hidden lg:block">
            <a
              href="#footer"
              className="p-2 mx-3 text-xl text-nav-link hover:text-primary transition-colors tracking-wider"
            >
              {data.nav_links[4]}
            </a>
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
