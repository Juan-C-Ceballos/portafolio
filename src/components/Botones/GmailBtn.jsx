import React from "react";
import { BiLogoGmail } from "react-icons/bi";

const GmailBtn = () => {
  const handleClick = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=juancruzceballos0@gmail.com", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="px-3 py-1 h-12 w-12 bg-custom-orange/60 text-gray-300 text-2xl font-montserrat rounded-lg font-bold transform
            transition-transform duration-200 hover:drop-shadow-[0px_2px_6px_rgba(255,255,255,0.5)] hover:scale-[1.05] hover:bg-custom-orange/75"
    >
      <BiLogoGmail />
    </button>
  );
};

export default GmailBtn;
