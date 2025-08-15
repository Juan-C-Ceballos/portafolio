import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const LanguageCard = ({ name, description, isOpen, onClick }) => {
    return (
        <motion.div
            onClick={onClick}
            initial={{ height: 60 }}   // altura cerrada
            animate={{ height: isOpen ? 180 : 60 }} // altura abierta
            transition={{ duration: 0.3 }}
            className='p-4 border rounded-lg shadow-md cursor-pointer w-40 overflow-hidden bg-custom-brown-400'
        >
            <h2 className='text-xl font-semibold text-center'>{name}</h2>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-center text-sm text-zinc-800"
                    >
                        {description}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>

    );
};

export default LanguageCard;
