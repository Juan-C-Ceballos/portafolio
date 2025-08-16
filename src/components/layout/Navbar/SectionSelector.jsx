import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useTranslation from "../../../hooks/useTranslation"
import { FiHome } from "react-icons/fi";
import { MdPersonOutline, MdWork } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { FiAlignJustify } from "react-icons/fi";

import { motion, AnimatePresence } from "framer-motion";

import useIsLargeScreen from '../../../hooks/useIsLargeScreen';


const SelectedSection = ({ name, linkTo, icon }) => {
    return (
        <motion.div
            className='
                flex lg:flex-col flex-row gap-3 lg:gap-0 items-center justify-center bg-custom-brown-200/80
                pt-2 pb-3 lg:px-6 px-4 rounded-2xl z-10'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
        >

            <Link to={linkTo} className='whitespace-nowrap'>{name}</Link>
            {icon}
        </motion.div>
    );
}

const NormalSection = ({ name, linkTo }) => {
    return (
        <motion.div
            className="flex items-center justify-center lg:px-6 px-0 whitespace-nowrap"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <Link to={linkTo}>{name}</Link>
        </motion.div>
    );
};


const SectionSelector = () => {
    const { t } = useTranslation();
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const isLarge = useIsLargeScreen();

    const sections = [
        { path: "/", key: "home", icon: <FiHome /> },
        { path: "/about", key: "aboutMe", icon: <MdPersonOutline /> },
        { path: "/work", key: "work", icon: <MdWork /> },
        { path: "/academic", key: "academic", icon: <HiAcademicCap /> },
    ];

    return (
        <div>
            {!isLarge && (
                <button
                    className='bg-custom-brown-400 p-2 rounded-2xl hover:bg-custom-brown-450
                    transition ease-in-out duration-300 m-1'
                    onClick={() => setIsOpen(!isOpen)}><FiAlignJustify size={40} /></button>
            )}

            <AnimatePresence>
                {(isOpen || isLarge) && (
                    <motion.div
                        className={`flex flex-col gap-4 bg-custom-brown-500 py-2 px-6 rounded-2xl
                    lg:flex-row `}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {sections.map(({ path, key, icon }) => (
                            location.pathname === path ? (
                                <SelectedSection
                                    key={path}
                                    name={t(`navbar.sectionSelector.${key}`)}
                                    linkTo={path}
                                    icon={icon}
                                />
                            ) : (
                                <NormalSection
                                    key={path}
                                    name={t(`navbar.sectionSelector.${key}`)}
                                    linkTo={path}
                                />
                            )
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SectionSelector;