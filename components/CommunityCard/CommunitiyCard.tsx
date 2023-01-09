import React, { useState } from "react";
import Image from "next/image";

type Props = {
  id: number;
  name: string;
  icon: string;
  bgColor: string;
};

const CommunitiyCard = ({ name, icon, bgColor }: Props) => {
  return (
    <div>
      {/* div with bg */}
      <div
        className={`flex items-center justify-center p-10 h-44 cursor-pointer`}
        style={{
          backgroundColor: bgColor,
        }}
      >
        {/* image */}
        <Image
          src={
            icon.includes("svg")
              ? `data:image/svg+xml;base64,${Buffer.from(icon).toString(
                  "base64"
                )}`
              : icon
          }
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
