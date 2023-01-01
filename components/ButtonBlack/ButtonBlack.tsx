import React, { useRef } from "react";

import Image from "next/image";

type Props = {
  text: string;
  type?: "tech" | "business";
};

const ButtonBlack = ({ text, type }: Props) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    if (!svgRef.current) return;

    svgRef.current.classList.remove("opacity-0", "right-0");
    svgRef.current.classList.add("opacity-100", "-right-8");

    if (!spanRef.current) return;

    spanRef.current.style.transform = "translate3d(-1rem,0,0)";
  };

  const handleMouseLeave = () => {
    if (!svgRef.current) return;

    svgRef.current.classList.remove("opacity-100", "-right-8");
    svgRef.current.classList.add("opacity-0", "right-0");

    if (!spanRef.current) return;

    spanRef.current.style.transform = "translate3d(0,0,0)";
  };

  return (
    <div className="bg-[#222323] rounded text-white mr-3 flex mt-2 md:mt-0">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="p-2 px-6 md:px-10 text-sm md:text-base font-bold flex justify-between"
      >
        <div className="flex items-center relative w-fit flex-nowrap whitespace-nowrap">
          <span ref={spanRef} className="transition-all duration-300">
            {text}

            <svg
              ref={svgRef}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 opacity-0 absolute right-0 top-1 transition-all duration-300 ease-in-out right"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
          </span>
        </div>
      </button>

      <div className="overflow-hidden relative">
        {type === "tech" ? (
          <Image
            src="https://geekyants.com/_next/image/?url=%2Fimages%2Fhashnode-icon.png&w=64&q=75"
            width="0"
            height="0"
            sizes="100vw"
            alt="hashnode logo"
            className="relative -right-[1px] -bottom-4 opacity-60 w-max h-max"
          />
        ) : (
          <Image
            src="https://geekyants.com/images/geekyants-icon.svg"
            width="0"
            height="0"
            sizes="100vw"
            alt="hashnode logo"
            className="relative -right-[1px] -bottom-[4px] opacity-60 w-full h-full"
          />
        )}
      </div>
    </div>
  );
};

export default ButtonBlack;
