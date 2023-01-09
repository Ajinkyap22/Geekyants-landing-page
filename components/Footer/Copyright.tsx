import React from "react";

type Props = {
  copyright: string;
  privacy: string;
  tnc: string;
};

const Copyright = ({ copyright, privacy, tnc }: Props) => {
  return (
    <div className="mt-10 bg-[#161617] py-4">
      <div className="xl:container xl:mx-auto flex-col flex md:flex-row justify-between px-8 lg:px-20 2xl:px-40">
        <span className="block text-white tracking-wider opacity-70 font-light text-sm">
          {copyright}
        </span>

        <span className="block text-white tracking-wider opacity-70 font-light text-sm">
          {privacy} | {tnc}
        </span>
      </div>
    </div>
  );
};

export default Copyright;
