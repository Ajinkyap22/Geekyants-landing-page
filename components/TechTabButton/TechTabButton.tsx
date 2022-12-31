import React from "react";

type Props = {
  text: string;
  handleTabClick: (tab: string) => void;
  isActive?: boolean;
};

const TechTabButton = ({ text, handleTabClick, isActive = false }: Props) => {
  return (
    <button
      onClick={() => handleTabClick(text)}
      className={`border mt-3 ${
        isActive
          ? "bg-[#19222A] text-white border"
          : "bg-white text-black hover:bg-zinc-100 border-[#CCCCCC]"
      }  transition duration-500 cursor-pointer mr-1 px-6 rounded py-2`}
    >
      {text}
    </button>
  );
};

export default TechTabButton;
