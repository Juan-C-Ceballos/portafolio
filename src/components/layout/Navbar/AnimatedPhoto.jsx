import { motion } from "framer-motion";

const AnimatedPhoto = ({ isVisible }) => (
  <motion.img
    src={personalPhoto}
    alt="Personal"
    className="w-12 h-12 rounded-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: isVisible ? 1 : 0 }}
    transition={{ duration: 0.5 }}
    pointerEvents={isVisible ? 'auto' : 'none'}
  />
);
