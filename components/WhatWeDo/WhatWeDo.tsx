import React from "react";

import LetsTalk from "components/LetsTalk/LetsTalk";
import ListCard from "components/ListCard/ListCard";

import { ProductsDataType } from "types/productsDataType";

type Props = {
  data: ProductsDataType;
};

const WhatWeDo = ({ data }: Props) => {
  return (
    <div className="bg-white pb-16">
      <div className="xl:container xl:mx-auto py-8 md:py-28 px-8 lg:px-20 2xl:px-40">
        {/* title */}
        <h2 className="font-bold text-4xl md:text-5xl">What We Do Best</h2>

        <div className="text-lg md:text-xl mt-10 mb-12">
          500+ projects deep and still going deeper in the Mobile & Web App
          development space. From A to Z of building beautiful apps, we do
          everything in-house, GeekyAnts style.
        </div>

        <LetsTalk text="LEARN MORE" />

        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-12 lg:gap-y-14">
            {data.map((item) => {
              return <ListCard key={item.id} item={item} theme="light" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
