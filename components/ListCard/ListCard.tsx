import React from "react";

import Image from "next/image";

type Props = {
  item: {
    id: number;
    heading: string;
    description: string;
    icon: string;
  };
  theme: "light" | "dark";
};

const ListCard = ({ item, theme }: Props) => {
  return (
    <div className="flex items-center leading-relaxed">
      <div className="pt-2 pl-1 mr-5">
        {/* icon */}
        <Image
          src={item.icon}
          alt={item.heading}
          width="0"
          height="0"
          sizes="100vw"
          className={`w-full ${theme === "light" ? "invert-[0.8]" : ""}`}
        />
      </div>

      <div className="ml-2">
        {/* name */}
        <h2 className="tracking-wide font-bold text-[1.75rem]">
          {item.heading}
        </h2>

        {/* description */}
        <div
          className={`mt-2 pr-1 max-w-md font-light leading-6 tracking-wider text-lg ${
            theme === "dark" ? "text-light" : "text-black"
          }`}
        >
          {item.description}
        </div>
      </div>
    </div>
  );
};

export default ListCard;
