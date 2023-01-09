import React from "react";

import uniqid from "uniqid";

type Props = {
  hire: string[];
};

const Hire = ({ hire }: Props) => {
  return (
    <div className="mt-8 lg:mt-0">
      {/* title */}
      <h6 className="text-white opacity-70 font-mediumm mb-6 text-lg">
        HIRE DEVELOPERS
      </h6>

      {/* list */}
      <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 lg:gap-0 w-full">
        {hire.map((type) => (
          <li
            key={uniqid()}
            className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal"
          >
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hire;
