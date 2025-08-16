import React from 'react';
import useTranslation from '../../hooks/useTranslation';
import { motion } from 'framer-motion';
import { FaRegCommentDots, FaRegLightbulb  } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaRegHandPointUp } from "react-icons/fa6";



const SkillItem = ({ skill, icon }) => {
    return (
        <motion.div
            className="relative rounded-2xl p-10 text-lg bg-custom-brown-200 cursor-pointer flex flex-col items-center gap-2"
            whileHover="hover"
            initial="rest"
            animate="rest"
        >
            <h3 className='text-center'>{skill}</h3>
            {icon}
        </motion.div>
    );
};

const SoftSkills = () => {
    const { t } = useTranslation();

    return (
        <div className='flex justify-center items-center h-full'>
            <div className='flex flex-col md:grid md:grid-cols-2 md:grid-rows-[1fr,1fr,1fr] gap-10 justify-center'>
                <SkillItem skill={t("aboutMe.softSkills.content.communication")} icon={<FaRegCommentDots size={35}/>} />
                <SkillItem skill={t("aboutMe.softSkills.content.teamwork")} icon={<AiOutlineTeam size={35}/>} />
                <hr className='col-span-2 border-custom-brown-300 border-1' />
                <SkillItem skill={t("aboutMe.softSkills.content.adaptability")} icon={<FiRepeat size={35}/>} />
                <SkillItem skill={t("aboutMe.softSkills.content.timeManagement")} icon={<MdOutlineAccessTime size={35}/>} />
                <hr className='col-span-2 border-custom-brown-300 border-1' />
                <SkillItem skill={t("aboutMe.softSkills.content.analyticalThinking")} icon={<FaRegLightbulb size={35}/>} />
                <SkillItem skill={t("aboutMe.softSkills.content.leadership")} icon={<FaRegHandPointUp size={35}/>} />
            </div>
        </div>
    );
};

export default SoftSkills;