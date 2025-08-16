import React from 'react';
import CirclePhoto from '../common/circlePhoto';

import { LuBrain } from "react-icons/lu";
import { GiPencilBrush } from "react-icons/gi";
import { FaVolleyball } from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";
import { TbTargetArrow } from "react-icons/tb";

import useTranslation from '../../hooks/useTranslation';

const PersonalInfoItem = ({ icon, text }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-evenly">
      <CirclePhoto content={icon} />
      <div className="w-2/3 text-center lg:text-justify bg-custom-brown-100 p-4 mx-6 rounded-3xl">
        <span>{text}</span>
      </div>
    </div>
  );
};

const PersonalInfo = () => {
    const { t } = useTranslation();

    const items = [
    { icon: <LuBrain size={50} />, text: t("aboutMe.personal.content.brain") },
    { icon: <GiPencilBrush size={50} />, text: t("aboutMe.personal.content.art") },
    { icon: <FaVolleyball size={50} />, text: t("aboutMe.personal.content.sport") },
    { icon: <IoLogoGameControllerB size={50} />, text: t("aboutMe.personal.content.gaming") },
    { icon: <TbTargetArrow size={50} />, text: t("aboutMe.personal.content.target") },
  ];

  return (
    <div className="flex flex-col items-center gap-3">
      {items.map((item, index) => (
        <PersonalInfoItem key={index} {...item} />
      ))}
    </div>
    );
};

export default PersonalInfo;