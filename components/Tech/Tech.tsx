import React, { useState } from "react";

import LetsTalk from "components/LetsTalk/LetsTalk";
import TechTabs from "components/TechTabs/TechTabs";
import TechCards from "components/TechCards/TechCards";

import { TechDataType } from "types/techDataType";

type Props = {
  data: TechDataType;
};

const Tech = ({ data }: Props) => {
  const [activeTab, setActiveTab] = useState<string>("Top");
  const [tech, setTech] = useState<{ name: string; icon: string }[]>(data.top);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);

    const techType = tab.toLocaleLowerCase() as
      | "top"
      | "web"
      | "mobile"
      | "backend"
      | "design"
      | "testing";

    const selectedTech = data[techType];

    setTech(selectedTech);
  };

  return (
    <div className="bg-zinc-100 pb-16">
      <div className="xl:container xl:mx-auto py-8 md:py-28 px-8 lg:px-20 2xl:px-40">
        {/* title */}
        <h1 className="text-4xl md:text-5xl font-bold">{data.heading}</h1>

        {/* description */}
        <p className="font-light text-xl my-3">{data.subheading}</p>

        {/* button */}
        <div className="mt-12">
          <LetsTalk text={data.button} />
        </div>

        {/* tabs */}
        <TechTabs
          activeTab={activeTab}
          tabs={data.categories}
          handleTabClick={handleTabClick}
        />

        {/* tech cards */}
        <TechCards activeTab={activeTab} tech={tech} />
      </div>
    </div>
  );
};

export default Tech;
