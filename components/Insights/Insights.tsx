import React from "react";

import ButtonBlack from "components/ButtonBlack/ButtonBlack";
import BlogCard from "components/BlogCard/BlogCard";

import { InsightsDataType } from "types/insightsDataType";

import uniqid from "uniqid";

type Props = {
  data: InsightsDataType;
};

const Insights = ({ data }: Props) => {
  return (
    <div className="bg-zinc-100 pb-16">
      <div className="xl:container xl:mx-auto py-8 md:py-28 px-8 lg:px-20 2xl:px-40">
        {/* title */}
        <h1 className="text-4xl md:text-5xl font-bold py-1">{data.heading}</h1>

        {/* description */}
        <p className="font-light text-xl my-3 mt-5">{data.subheading}</p>

        {/* read blog buttons */}
        <div className="flex flex-col md:flex-row items-start mb-10 mt-8 md:mb-20 md:mt-12">
          {/* tech blog */}
          <ButtonBlack text={data.buttons[0]} type="tech" />

          {/* business blog */}
          <ButtonBlack text={data.buttons[0]} type="business" />
        </div>

        {/* blog cards */}
        <div className=" mt-8 md:mt-20 grid grid-cols-1 mx-2 md:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.cards.map((card) => {
            return <BlogCard key={uniqid()} item={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Insights;
