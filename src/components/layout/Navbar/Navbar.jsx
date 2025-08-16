import React from 'react';
import LanguageSelector from './LanguageSelector';
import SectionSelector from './SectionSelector';
import { useLocation } from 'react-router-dom';
import ContactMeBTN from './ContactMeBTN';

import useIsLargeScreen from '../../../hooks/useIsLargeScreen';

import { motion, AnimatePresence } from "framer-motion";

const AnimatedPhoto = ({ isVisible }) => (
    <motion.img
        src={"personalPhoto.jpg"}
        alt="Personal"
        className="w-13 h-13 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        pointerEvents={isVisible ? 'auto' : 'none'}
    />
);

const AnimatedContactMeBTN = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ContactMeBTN />
        </motion.div>
    );
}

const AnimatedLanguageSelector = ({ isShifted }) => {
    return (
        <motion.div
            animate={{ x: isShifted ? 50 : 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <LanguageSelector />
        </motion.div>
    );
}

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const isLarge = useIsLargeScreen();

    return (
        <nav
            className="flex items-center px-10 py-4 bg-transparent">
            {isLarge ? (
                <>
                    <div className='flex-1 flex justify-start gap-2 items-center'>
                        <AnimatePresence>
                            {!isHome && <AnimatedContactMeBTN key="contactBtn" />}
                        </AnimatePresence>
                        <AnimatedLanguageSelector isShifted={!isHome} />
                    </div>
                    <div className='flex-1 flex justify-center'>
                        <SectionSelector />
                    </div>
                    <div className='flex-1 flex justify-end'>
                        <AnimatedPhoto isVisible={!isHome} />
                    </div>
                </>
            ) : (
                <div className='flex flex-col w-full justify-center'>
                    <div className='grid grid-rows-2'>
                        <div className='row-start-1'>
                            <SectionSelector />
                        </div>

                        <div className='row-start-2 flex flex-row justify-between items-center'>
                            {!isHome && <AnimatedContactMeBTN key="contactBtn" />}
                            <LanguageSelector isShifted={!isHome} />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;