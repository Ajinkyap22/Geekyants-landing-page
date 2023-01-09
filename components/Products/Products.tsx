import React from "react";

import LetsTalk from "components/LetsTalk/LetsTalk";
import ListCard from "components/ListCard/ListCard";

import { ProductsDataType } from "types/productsDataType";

type Props = {
  data: ProductsDataType;
};

const Products = ({ data }: Props) => {
  return (
    <div className="bg-darkBlue pb-16">
      <div className="xl:container xl:mx-auto py-8 md:py-28 px-8 lg:px-20 2xl:px-40 text-white">
        {/* title */}
        <h2 className="font-bold text-4xl md:text-5xl">{data.heading}</h2>

        <div className="font-light text-light text-lg md:text-xl mt-10 mb-12">
          {data.subheading}
        </div>

        <LetsTalk text="LEARN MORE" />

        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-12 lg:gap-y-14">
            {data.products.map((item) => {
              return <ListCard key={item.id} item={item} theme="dark" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
