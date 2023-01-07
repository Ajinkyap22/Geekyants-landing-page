import React, { useState } from "react";
import Image from "next/image";

type Props = {
  id: number;
  name: string;
  image: string;
  bgColor: string;
};

const CommunitiyCard = ({ name, image, bgColor }: Props) => {
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
          src={image}
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
