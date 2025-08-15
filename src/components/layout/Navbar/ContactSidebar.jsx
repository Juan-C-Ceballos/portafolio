import React, { useState } from 'react';
import { useSidebar } from '../../../context/SidebarContext';
import useTranslation from '../../../hooks/useTranslation';
import { FaLinkedin, FaExternalLinkAlt, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail, IoMdClose } from "react-icons/io";
import { BsCopy } from "react-icons/bs";
import { motion, AnimatePresence } from 'framer-motion';
import CopyNotification, { handleCopy } from '../../common/CopyNotification';

const ContactCard = ({ icon, text, btnIcon, action }) => {
    return (
        <div className='flex items-center justify-between bg-custom-brown-550 p-4 rounded-lg mb-4 text-custom-brown-100'>
            <div className='flex flex-row items-center gap-10'>
                <div className='hover:scale-105 transition ease-in-out duration-200'>{icon}</div>
                <span className='text-lg text-start'>{text}</span>
            </div>
            <button
                onClick={action}
                className='
                    bg-custom-brown-200 p-2 rounded-lg cursor-pointer
                    hover:bg-custom-brown-300 hover:scale-105 transition ease-in-out duration-200
                    text-zinc-900'
            >{btnIcon}</button>
        </div>
    );
};

const sidebarVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0 },
    exit: { x: '-100%' }
};

const ContactSidebar = () => {
    const { t } = useTranslation();
    const { isSidebarOpen, closeSidebar } = useSidebar();

    const [copiedText, setCopiedText] = useState(null);

    return (
        <>
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        {/* Fondo semitransparente que cierra la sidebar si clickeas */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-zinc-900/50"
                            onClick={closeSidebar}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        {/* Sidebar animada */}
                        <motion.aside
                            className="fixed top-0 left-0 z-50 w-1/3 bg-custom-brown-400 h-full p-4 flex flex-col items-center"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={sidebarVariants}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <motion.button
                                className='flex self-end bg-custom-brown-200 rounded-full
                            hover:bg-custom-brown-100 hover:scale-110 transition ease-in-out duration-200'
                                onClick={closeSidebar}
                                whileTap={{ rotate: 720 }}  // rota 720 grados al clickeo (tap)
                                transition={{ type: "spring", stiffness: 300 }}
                                aria-label="Cerrar sidebar"
                            >
                                <IoMdClose size={30} />
                            </motion.button>

                            <h2 className='text-lg font-bold text-center text-custom-brown-800 w-7/8 pt-8 pb-5'>{t('contact.title')}</h2>

                            <hr className='h-1 bg-gradient-to-r from-custom-brown-300 via-custom-brown-150 to-custom-brown-300 border-0 mt-4 w-7/8' />

                            <div className='flex flex-col justify-center h-full w-full p-2 gap-17'>
                                <ContactCard
                                    icon={<FaLinkedin size={44} />}
                                    text={t('contact.linkedin.link')}
                                    btnIcon={<FaExternalLinkAlt size={28} />}
                                    action={() => window.open(t('contact.linkedin.link'), '_blank')}
                                />
                                <ContactCard
                                    icon={<FaGithub size={44} />}
                                    text={t('contact.github.link')}
                                    btnIcon={<FaExternalLinkAlt size={28} />}
                                    action={() => window.open(t('contact.github.link'), '_blank')}
                                />
                                <ContactCard
                                    icon={<IoIosMail size={44} />}
                                    text={t('contact.mail.link')}
                                    btnIcon={<BsCopy size={28} />}
                                    action={() => handleCopy(t('contact.mail.link'), setCopiedText)}
                                />
                                <ContactCard
                                    icon={<FaPhoneAlt size={44} />}
                                    text={t('contact.phone.link')}
                                    btnIcon={<BsCopy size={28} />}
                                    action={() => handleCopy(t('contact.phone.link'), setCopiedText)}
                                />
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
            <CopyNotification text={copiedText} />
        </>
    );
};

export default ContactSidebar;
