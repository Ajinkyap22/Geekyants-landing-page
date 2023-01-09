import React from "react";

import Image from "next/image";

type Props = {
  icons: string[];
};

const Connect = ({ icons }: Props) => {
  return (
    <div className="flex flex-col mt-8">
      <h6 className="mb-5 text-lg font-medium text-white opacity-70 tracking-wider">
        CONNECT
      </h6>

      {/* social media icons */}
      <div className="flex flex-wrap w-full">
        {icons.map((icon) => (
          <div className="mr-[0.625rem] mb-[0.625rem] flex justify-center items-center w-11 h-11 rounded-full bg-dark">
            <Image
              src={`data:image/svg+xml;base64,${icon}`}
              width="0"
              height="0"
              sizes="100vw"
              className="w-6 h-6 object-contain"
              alt="social media icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect;
