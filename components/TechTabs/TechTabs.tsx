import React, { useState } from "react";

import TechTabButton from "components/TechTabButton/TechTabButton";

import uniqid from "uniqid";

type Props = {
  activeTab: string;
  handleTabClick: (tab: string) => void;
  tabs: string[];
};

const TechTabs = ({ activeTab, tabs, handleTabClick }: Props) => {
  return (
    <div className="mt-20 mb-10">
      {/* buttons */}
      {tabs.map((tab) => (
        <TechTabButton
          text={tab}
          key={uniqid()}
          isActive={tab == activeTab}
          handleTabClick={handleTabClick}
        />
      ))}
    </div>
  );
};

export default TechTabs;
