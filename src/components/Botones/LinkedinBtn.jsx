import React from "react";
import { BiLogoLinkedinSquare   } from "react-icons/bi";

const LinkedinBtn = () => {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/juan-cruz-ceballos-4b7528280/", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="px-3 py-1 bg-custom-orange/60 text-gray-300 text-2xl font-montserrat rounded-lg font-bold transform
            transition-transform duration-200 hover:drop-shadow-[0px_2px_6px_rgba(255,255,255,0.5)] hover:scale-[1.05]"
    >
      <BiLogoLinkedinSquare   />
    </button>
  );
};

export default LinkedinBtn;
