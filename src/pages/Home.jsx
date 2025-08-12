import React from 'react';
import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div
            className='bg-custom-brown-100 min-h-screen flex flex-col items-center justify-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Home Page</h1>
            <p>Bienvenido a la página de inicio.</p>
        </motion.div>
    );
};

export default Home;
