import React from "react";

import CommunitiyCard from "components/CommunityCard/CommunitiyCard";
import LetsTalk from "components/LetsTalk/LetsTalk";

import { CommunitiesDataType } from "types/communitiesDataType";

type Props = {
  data: CommunitiesDataType;
};

const Communities = ({ data }: Props) => {
  return (
    <div className="bg-white pb-16">
      <div className="xl:container xl:mx-auto py-8 md:py-28 px-8 lg:px-20 2xl:px-40">
        {/* title */}
        <h1 className="text-4xl md:text-5xl font-bold py-1">{data.heading}</h1>

        {/* description */}
        <p className="font-light text-xl my-3 mt-5">{data.subHeading}</p>

        {/* button */}
        <div className="mt-12">
          <LetsTalk text={data.buttonText} />
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-6 justify-items-center md:justify-items-start mt-20">
          {data.communities.map((community) => (
            <CommunitiyCard key={community.id} {...community} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Communities;
