import React, { useState, useEffect, use } from "react";

import { web, mobile } from "data/tech";

import TechCard from "components/TechCard/TechCard";

import uniqid from "uniqid";

type Props = {
  activeTab: string;
};

const TechCards = ({ activeTab }: Props) => {
  const [tech, setTech] = useState<{ name: string; icon: string }[]>([]);

  useEffect(() => {
    switch (activeTab) {
      case "Web":
        setTech(web);
        break;
      case "Mobile":
        setTech(mobile);
        break;
      default:
        setTech(web);
    }
  }, [activeTab]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tech.map((tech) => (
        <TechCard tech={tech} key={uniqid()} />
      ))}
    </div>
  );
};

export default TechCards;
