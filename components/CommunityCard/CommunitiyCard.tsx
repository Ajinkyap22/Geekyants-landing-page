import React, { useState } from "react";
import Image from "next/image";

type Props = {
  name: string;
  icon: string;
  bgColor: string;
};

const CommunitiyCard = ({ name, icon, bgColor }: Props) => {
  return (
    <div className="h-44">
      {/* div with bg */}
      <div
        className={`flex items-center justify-center p-10 h-full`}
        style={{
          backgroundColor: bgColor,
        }}
      >
        {/* image */}
        <Image
          src={icon}
          alt={name}
          width="0"
          height="0"
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* text */}
      <div className="pt-2 text-center">
        <span className="text-xl text-black font-bold pt-2">{name}</span>
      </div>
    </div>
  );
};

export default CommunitiyCard;
