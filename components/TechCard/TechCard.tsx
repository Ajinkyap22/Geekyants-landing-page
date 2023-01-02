import React from "react";

import Image from "next/image";

type Props = {
  tech: {
    name: string;
    icon: string;
  };
};

const TechCard = ({ tech }: Props) => {
  return (
    <div className="bg-white p-5 border border-[#e6e6e6] cursor-pointer">
      <Image
        src={tech.icon}
        alt={tech.name}
        width="0"
        height="0"
        sizes="100vw"
        className="w-10 pb-3"
      />

      <span className="text-[#5c5c5c] text-lg">{tech.name}</span>
    </div>
  );
};

export default TechCard;
