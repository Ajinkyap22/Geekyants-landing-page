import React from "react";

import TechCard from "components/TechCard/TechCard";

import uniqid from "uniqid";

type Props = {
  activeTab: string;
  tech: { name: string; icon: string }[];
};

const TechCards = ({ activeTab, tech }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tech.map((tech) => (
        <TechCard tech={tech} key={uniqid()} />
      ))}
    </div>
  );
};

export default TechCards;
