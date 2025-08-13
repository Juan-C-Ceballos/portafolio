import react from 'react';
import { motion } from 'framer-motion';

const UnderlinedText = ({ children }) => {
    return (
        <motion.span
            className="relative text-2xl"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {children}
            <motion.span
                className="absolute left-0 bottom-0 h-[2px] bg-custom-brown-400"
                variants={{
                    rest: { width: 0 },
                    hover: { width: "100%" }
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            />
        </motion.span>
    );
};

export default UnderlinedText;