import React, { useState } from 'react';
import { motion } from "framer-motion";
import personalPhoto from '../assets/personalPhoto.jpg';
import useTranslation from '../hooks/useTranslation';
import { GoDotFill } from "react-icons/go";

import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import CopyNotification, { handleCopy } from '../components/common/CopyNotification';
import UnderlinedText from '../components/common/UnderlinedText';

const AnimatedPhoto = () => (
    <motion.img
        src={personalPhoto}
        alt="Personal"
        className="w-120 h-120 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
    />
);

const ContactElement = ({ icon, action }) => (
    <motion.div
        className="flex items-center justify-center cursor-pointer p-2 rounded-xl"
        onClick={action}
        initial={{ backgroundColor: "transparent" }}
        whileHover={{
            scale: 1.2,             // agranda un poco
            y: -5,                  // se eleva
            boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
            backgroundColor: "#e9dbd6", // sutil fondo
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
            type: "spring",
            stiffness: 300,
            damping: 15
        }}
    >
        {icon}
    </motion.div>
);

const ContactArray = ({ setCopiedText }) => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-row gap-6 p-10 rounded-lg">
            <ContactElement icon={<FaLinkedin size={50} />} action={() => window.open(t('contact.linkedin.link'), '_blank')} />
            <ContactElement icon={<FaGithub size={50} />} action={() => window.open(t('contact.github.link'), '_blank')} />
            <ContactElement icon={<IoIosMail size={50} />} action={() => handleCopy(t('contact.mail.link'), setCopiedText)} />
            <ContactElement icon={<FaPhoneAlt size={50} />} action={() => handleCopy(t('contact.phone.link'), setCopiedText)} />
        </div>
    );
};

const Home = () => {
    const { t } = useTranslation();

    const [copiedText, setCopiedText] = useState(null);

    return (
        <>
            <motion.div
                className='bg-custom-brown-100 min-h-screen flex flex-col items-center px-6 justify-evenly'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className='flex flex-row h-full w-full items-center gap-4 pt-10 bg-custom-brown-150 rounded-4xl'>
                    <div className='w-2/3 flex flex-col items-center justify-center p-10'>
                        <UnderlinedText>
                            <h1 className='text-6xl font-bold p-2'>{t("home.title")}</h1>
                        </UnderlinedText>
                        <div className="pt-3">

                            <div className="flex items-center gap-2">
                                <GoDotFill />
                                <span className="text-2xl hover:text-scale-105 hover:text-">
                                    {t("home.description.student")}
                                </span>
                            </div>


                            <div className="flex items-center gap-2 pl-12">
                                <GoDotFill />
                                <span className="text-2xl">{t("home.description.analyst")}</span>
                            </div>


                            <div className="flex items-center gap-2 pl-24">
                                <GoDotFill />
                                <span className="text-2xl">{t("home.description.developer")}</span>
                            </div>

                        </div>
                    </div>
                    <AnimatedPhoto />
                </div>

                <div className='sticky bottom-0'>
                    <ContactArray setCopiedText={setCopiedText} />
                </div>
            </motion.div>
            <CopyNotification text={copiedText} />
        </>
    );
};

export default Home;
