import React from "react";

import ButtonBlack from "components/ButtonBlack/ButtonBlack";
import BlogCard from "components/BlogCard/BlogCard";
import LetsTalk from "components/LetsTalk/LetsTalk";

import { MeetupsDataType } from "types/meetupsDataType";

import uniqid from "uniqid";

type Props = {
  data: MeetupsDataType;
};

const Meetups = ({ data }: Props) => {
  return (
    <div className="bg-darkBlue pb-16">
      <div className="xl:container xl:mx-auto py-8 md:py-28 px-8 lg:px-20 2xl:px-40 text-white">
        {/* title */}
        <h1 className="text-4xl md:text-5xl font-bold py-1">{data.heading}</h1>

        {/* description */}
        <p className="font-light text-light text-xl my-3 mt-5">
          {data.subheading}
        </p>

        {/* button */}
        <div className="mb-10 mt-8 md:mb-20 md:mt-12">
          <LetsTalk text={data.button} />
        </div>

        {/* blog cards */}
        <div className=" mt-8 md:mt-20 grid grid-cols-1 mx-2 md:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.cards.map((item) => {
            return <BlogCard key={uniqid()} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Meetups;
