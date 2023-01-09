import React from "react";

import Image from "next/image";

type Props = {
  item: {
    title: string;
    description: string;
    date: string;
    image: string;
  };
};

const BlogCard = ({ item }: Props) => {
  return (
    <div className="flex flex-col mt-3 h-full rounded-md cursor-pointer bg-white shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 ease-out">
      {/* image */}
      <div className="h-36">
        <Image
          src={item.image}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full object-cover rounded-t-md"
          alt="Blog realted"
        />
      </div>

      <div className="relative pt-4 pb-8 px-4">
        {/* title */}
        <p className="text-base md:text-2xl text-[#414141] font-semibold">
          {item.title}
        </p>

        {/* description */}
        <p className="mb-3 overflow-hidden pt-3 text-nav-link font-light tracking-wider">
          {item.description.trim().length >= 159
            ? `
              ${item.description.slice(0, 161)}...
            `
            : item.description}
        </p>

        {/* date */}
        <p className="p-0 text-sm text-nav-link font-light">{item.date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
