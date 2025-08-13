import React from "react";
import CirclePhoto from '../common/circlePhoto';

import { FaReact, FaJava, FaPython, FaGithub, FaDatabase     } from "react-icons/fa";
import { SiPostman, SiJavascript  } from "react-icons/si";

import useTranslation from "../../hooks/useTranslation";

const SquarePhoto = ({ content }) => { 
    return (
        <div className='bg-custom-brown-200 h-30 w-30 rounded-4xl flex items-center justify-center'>
            {content}
        </div>
    )
};

const TechnologyItem = ({ icon, text, type = "circle", className }) => {
  const PhotoComponent = type === "circle" ? CirclePhoto : SquarePhoto;

  return (
    <div className={`flex flex-col items-center justify-evenly gap-2 ${className}`}>
      <PhotoComponent content={icon} />
      <div className="w-2/3 text-center bg-custom-brown-100 p-4 mx-6 rounded-3xl">
        <span>{text}</span>
      </div>
    </div>
  );
};

const Technology = () => {
    const { t } = useTranslation();

    return (
        <div className="grid grid-cols-3 items-center gap-6 justify-center">
            <TechnologyItem icon={<FaReact size={50} />} text={t("aboutMe.technology.content.react")} className="col-start-1 row-start-1"/>
            <TechnologyItem icon={<FaJava size={50} />} text={t("aboutMe.technology.content.java")} type="square" className="col-start-2 row-start-1" />
            <TechnologyItem icon={<FaPython size={50} />} text={t("aboutMe.technology.content.python")} className="col-start-3 row-start-1"/>
            <TechnologyItem icon={<FaGithub size={50} />} text={t("aboutMe.technology.content.github")} type="square" className="col-start-1 row-start-2"/>
            <TechnologyItem icon={<FaDatabase size={50} />} text={t("aboutMe.technology.content.databases")} className="col-start-2 row-start-2"/>
            <TechnologyItem icon={<SiPostman size={50} />} text={t("aboutMe.technology.content.postman")} type="square" className="col-start-3 row-start-2"/>
            <TechnologyItem icon={<SiJavascript size={50} />} text={t("aboutMe.technology.content.javascript")} type="square" className="col-start-2 row-start-3"/>
        </div>
    );
};

export default Technology;