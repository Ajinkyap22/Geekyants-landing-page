import React from "react";
import Image from "next/image";

import uniqid from "uniqid";

type Props = {
  awards: string[];
};

const Awards = ({ awards }: Props) => {
  return (
    <div className="grid mt-14 grid-cols-3 md:grid-cols-7 items-center justify-items-center gap-14 py-10 border-y border-[#707070]">
      {awards.map((award) => (
        <div key={uniqid()} className="w-3/4">
          <Image
            src={award}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full"
            alt="award"
          />
        </div>
      ))}
    </div>
  );
};

export default Awards;
