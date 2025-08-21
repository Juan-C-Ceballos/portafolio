import React, { useState } from 'react';
import { motion } from "framer-motion";
import useTranslation from '../hooks/useTranslation';

import PersonalInfo from '../components/about/PersonalInfo';
import SoftSkills from '../components/about/SoftSkills';
import Technology from '../components/about/Technology';

import { FaQuestion } from "react-icons/fa";
import { FaFeatherPointed } from "react-icons/fa6";
import { BsFillHddStackFill } from "react-icons/bs";

const containerVariants = {
  rest: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hover: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
};

const titleVariants = {
  rest: { opacity: 0.7, y: 10 },
  hover: { opacity: 1, y: 0 },
};

const AboutColumn = ({ title, icon, content, isActive, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="bg-custom-brown-50 rounded-xl shadow-lg cursor-pointer flex flex-col p-6 text-custom-brown-850"
      initial="rest"
      animate={isActive ? "active" : "rest"}
      whileHover={!isActive ? "hover" : ""}
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <div className={`flex justify-center ${isActive ? "self-end" : "self-center"} gap-4 items-center`}>
        {isActive && (<h2 className="text-2xl font-semibold text-center">{title}</h2>)}
        {icon}
      </div>


      {!isActive && (
        <motion.h2
          className="text-2xl font-semibold mt-4 text-center text-custom-brown-550"
          variants={titleVariants}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h2>
      )}

      {isActive && (
        <motion.div
          className="mt-4 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {content}
        </motion.div>
      )}
    </motion.div>
  );
};

const About = () => {
  const [active, setActive] = useState(null);
  const { t } = useTranslation();

  const handleClick = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <motion.div
      className="bg-custom-brown-400 min-h-screen flex flex-col items-center justify-start gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex lg:flex-row flex-col w-full gap-6 min-h-[87vh] px-6 py-5">
        <AboutColumn
          title={t('aboutMe.personal.title')}
          content={<PersonalInfo />}
          icon={<FaQuestion size={active === null || active !== 0 ? 80 : 50} />}
          isActive={active === 0}
          onClick={() => handleClick(0)}
        />
        <AboutColumn
          title={t('aboutMe.technology.title')}
          content={<Technology />}
          icon={<BsFillHddStackFill size={active === null || active !== 1 ? 80 : 50} />}
          isActive={active === 1}
          onClick={() => handleClick(1)}
        />
        <AboutColumn
          title={t('aboutMe.softSkills.title')}
          content={<SoftSkills />}
          icon={<FaFeatherPointed size={active === null || active !== 2 ? 80 : 50} />}
          isActive={active === 2}
          onClick={() => handleClick(2)}
        />
      </div>
    </motion.div>
  );
};

export default About;


