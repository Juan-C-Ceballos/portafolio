import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TechItem = ({ icon, label, extended = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            {!extended ? (
                <div
                    className="relative flex flex-col items-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="bg-custom-brown-250 rounded-full p-3 flex items-center justify-center
                        hover:scale-105 hover:text-custom-brown-50 transition ease-in-out duration-200">
                        <span>{icon}</span>
                    </div>
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                transition={{ duration: 0.2 }}
                                className="absolute mt-12 px-2 py-1 bg-zinc-900/60 text-white text-sm rounded-md whitespace-nowrap shadow-lg z-50"
                            >
                                {label}
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            ) : (
                <div className="relative flex flex-col items-center">
                    <div className="bg-custom-brown-250 rounded-full p-3 flex items-center justify-center
                        hover:scale-105 hover:text-custom-brown-50 transition ease-in-out duration-200 gap-3">
                        <span>{icon}</span>
                        <span className="">{label}</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default TechItem;
