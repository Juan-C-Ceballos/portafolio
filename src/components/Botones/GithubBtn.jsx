import React from "react";
import { BiLogoGithub  } from "react-icons/bi";

const GithubBtn = () => {
  const handleClick = () => {
    window.open("https://github.com/Juan-C-Ceballos", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="px-3 py-1 bg-custom-orange/60 text-gray-300 text-2xl font-montserrat rounded-lg font-bold transform
            transition-transform duration-200 hover:drop-shadow-[0px_2px_6px_rgba(255,255,255,0.5)] hover:scale-[1.05]"
    >
      <BiLogoGithub  />
    </button>
  );
};

export default GithubBtn;
