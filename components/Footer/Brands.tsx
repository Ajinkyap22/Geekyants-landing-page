import React from "react";

import Image from "next/image";
import uniqid from "uniqid";

type Props = {
  brands: string[];
};

const Brands = ({ brands }: Props) => {
  return (
    <div className="flex items-center rounded w-fit py-4 px-6 bg-dark">
      {brands.map((brand, i) => (
        <div
          key={uniqid()}
          className={`${i === 0 ? "w-16" : "w-12"} ${
            i === 1 ? "mx-3" : ""
          } hover:opacity-90 cursor-pointer`}
        >
          <Image
            src={brand}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-fit object-contain"
            alt="brand"
          />
        </div>
      ))}
    </div>
  );
};

export default Brands;
