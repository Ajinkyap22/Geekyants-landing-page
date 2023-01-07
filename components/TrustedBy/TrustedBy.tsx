import React from "react";

import LetsTalk from "components/LetsTalk/LetsTalk";
import Slider from "components/Slider/Slider";

type Props = {
  data: string[];
};

const TrustedBy = ({ data }: Props) => {
  return (
    <div className="bg-darkBlue pb-16">
      <div className="xl:container xl:mx-auto py-8 md:py-28 px-8 lg:px-20 2xl:px-40 text-white">
        {/* title */}
        <h1 className="text-4xl md:text-5xl font-bold py-1">Trusted by</h1>

        {/* description */}
        <p className="font-light text-light text-lg md:text-xl mt-10 mb-12">
          Leading companies across the globe have put their faith in us to drive
          innovation and develop tailored solutions for them.
        </p>

        {/* button */}
        <LetsTalk text="READ THE CASE STUDIES" />

        {/* slider */}
        <Slider data={data} />
      </div>
    </div>
  );
};

export default TrustedBy;
