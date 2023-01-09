import React, { forwardRef } from "react";

import LetsTalk from "components/LetsTalk/LetsTalk";
import Slider from "components/Slider/Slider";

import { PartnersDataType } from "types/partnersDataType";

type Props = {
  data: PartnersDataType;
};

const TrustedBy = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  return (
    <div ref={ref} className="bg-darkBlue pb-16">
      <div className="xl:container xl:mx-auto py-8 md:py-28 px-8 lg:px-20 2xl:px-40 text-white">
        {/* title */}
        <h1 className="text-4xl md:text-5xl font-bold py-1">{data.heading}</h1>

        {/* description */}
        <p className="font-light text-light text-lg md:text-xl mt-10 mb-12">
          {data.subheading}
        </p>

        {/* button */}
        <LetsTalk text={data.button} />

        {/* slider */}
        <Slider data={data.partners} />
      </div>
    </div>
  );
});

export default TrustedBy;
