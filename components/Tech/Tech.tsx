import React, { useState } from "react";

import LetsTalk from "components/LetsTalk/LetsTalk";
import TechTabs from "components/TechTabs/TechTabs";
import TechCards from "components/TechCards/TechCards";

const Tech = () => {
  const [activeTab, setActiveTab] = useState<string>("Top");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-zinc-100 pb-16">
      <div className="container mx-auto py-8 md:py-28 px-8 md:px-20 2xl:px-40">
        {/* title */}
        <h1 className="text-4xl md:text-5xl font-bold">Tech We Love</h1>

        {/* description */}
        <p className="font-light text-xl my-3">
          Made out of our love for experiments or out of sheer necessity to
          solve problems in the development sphere, our open source
          contributions and products are built for you.
        </p>

        {/* button */}
        <div className="mt-12">
          <LetsTalk text="LET'S TALK" />
        </div>

        {/* tabs */}
        <TechTabs activeTab={activeTab} handleTabClick={handleTabClick} />

        {/* tech cards */}
        <TechCards activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Tech;
