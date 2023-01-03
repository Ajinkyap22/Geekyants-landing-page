import React from "react";

import ButtonBlack from "components/ButtonBlack/ButtonBlack";
import BlogCard from "components/BlogCard/BlogCard";

const Insights = () => {
  return (
    <div className="bg-zinc-100 pb-16">
      <div className="xl:container xl:mx-auto py-8 md:py-28 px-8 lg:px-20 2xl:px-40">
        {/* title */}
        <h1 className="text-4xl md:text-5xl font-bold py-1">Insights</h1>

        {/* description */}
        <p className="font-light text-xl my-3 mt-5">
          Read about everything that goes on inside the brilliant minds of our
          Geeks and understand GeekyAnts better through our blog.
        </p>

        {/* read blog buttons */}
        <div className="flex flex-col md:flex-row items-start mb-10 mt-8 md:mb-20 md:mt-12">
          {/* tech blog */}
          <ButtonBlack text="READ OUR TECH BLOG" type="tech" />

          {/* business blog */}
          <ButtonBlack text="READ OUR BUSINESS BLOG" type="business" />
        </div>

        {/* blog cards */}
        <div className=" mt-8 md:mt-20 grid grid-cols-1 mx-2 md:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogCard
            title="TypeScript: Building Blocks"
            description="After reviewing the basic concepts of TypeScript in the previous blog, let's learn how to code in TypeScript."
            date="Dec 29, 2022"
            image="https://geekyants.com/_next/image/?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Farticleblogcomponent%2F16371%2F2022-12-29%2F235241631-1672309300.png&w=3840&q=75"
          />

          <BlogCard
            title="TypeScript: Building Blocks"
            description="After reviewing the basic concepts of TypeScript in the previous blog, let's learn how to code in TypeScript."
            date="Dec 29, 2022"
            image="https://geekyants.com/_next/image/?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Farticleblogcomponent%2F16371%2F2022-12-29%2F235241631-1672309300.png&w=3840&q=75"
          />

          <BlogCard
            title="TypeScript: Building Blocks"
            description="After reviewing the basic concepts of TypeScript in the previous blog, let's learn how to code in TypeScript."
            date="Dec 29, 2022"
            image="https://geekyants.com/_next/image/?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Farticleblogcomponent%2F16371%2F2022-12-29%2F235241631-1672309300.png&w=3840&q=75"
          />
        </div>
      </div>
    </div>
  );
};

export default Insights;
