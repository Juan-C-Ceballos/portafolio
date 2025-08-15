import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FaJava, FaReact, FaPython, FaGoogleDrive, FaFigma } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiSupabase, SiFastapi, SiMiro, SiCanva } from "react-icons/si";
import ProjectPills from './ProjectPills';
import TechItem from './TechItem';
import { IoMdClose } from 'react-icons/io';

const iconMap = {
    FaJava: <FaJava size={30} />,
    FaReact: <FaReact size={30} />,
    SiSpringboot: <SiSpringboot size={30} />,
    SiTailwindcss: <SiTailwindcss size={30} />,
    SiSupabase: <SiSupabase size={30} />,
    FaPython: <FaPython size={30} />,
    SiFastapi: <SiFastapi size={30} />,
    SiMiro: <SiMiro size={20} />,
    FaGoogleDrive: <FaGoogleDrive size={30} />,
    FaFigma: <FaFigma size={30} />,
    SiCanva: <SiCanva size={30} />
};

const ProjectCard = ({ title, description, date, pills, technology, photo, longDescription, seeMore }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Card normal */}
            <div
                onClick={() => setIsOpen(true)}
                className="bg-custom-brown-150 rounded-4xl hover:scale-102 flex flex-col justify-between
                    transition ease-in-out duration-200 shadow-lg cursor-pointer"
            >
                <img className="rounded-t-4xl" src={photo} alt={title} />

                <div className='px-6 pt-4 flex flex-col justify-center'>
                    <div className='flex flex-row items-center justify-between'>
                        <h2 className='text-3xl font-bold flex-2/3'>{title}</h2>
                        <span className='flex-1/3 text-end'>{date}</span>
                    </div>

                    <p className='text-md my-2'>{description}</p>

                    <div className='flex flex-row gap-3 justify-start'>
                        {pills.map((pill) => (
                            <ProjectPills text={pill.label} key={pill.label} />
                        ))}
                    </div>

                    <div className='flex flex-row gap-2 items-center justify-center m-3'>
                        {technology.map((tech) => (
                            <TechItem icon={iconMap[tech.icon]} label={tech.label} key={tech.label} />
                        ))}
                    </div>
                </div>

                <div className='mb-2 flex flex-col items-center justify-center'>
                    <span className='text-sm text-zinc-900/50'>{seeMore}</span>
                </div>
            </div>

            {/* Modal animado */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/50"
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-custom-brown-150 rounded-4xl p-6 w-[170vh] max-h-[90vh] shadow-2xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className='flex justify-end'>
                                <motion.button
                                    className='
                                    bg-custom-brown-50 rounded-full hover:bg-custom-brown-100 
                                    hover:scale-110 transition ease-in-out duration-200'
                                    onClick={() => setIsOpen(false)}
                                    whileTap={{ rotate: 720 }}  // rota 720 grados al clickeo (tap)
                                    transition={{ type: "spring", stiffness: 300 }}
                                    aria-label="Cerrar sidebar"
                                >
                                    <IoMdClose size={30} />
                                </motion.button>
                            </div>

                            <h2 className="text-4xl font-bold m-4">{title}</h2>
                            <div className='grid grid-cols-4 gap-4 max-h-[75vh] overflow-y-scroll custom-scrollbar'>
                                <img src={photo} alt={title} className="rounded-3xl mb-4 col-start-1 col-span-3" />

                                <div className='grid grid-col-[0.1fr, 1fr] grid-rows col-start-4 col-span-1'>
                                    <div className='border-l-2 border-custom-brown-300 place-self-center h-full mr-4 col-start-1 row-start-1'></div>
                                    <div className='border-l-2 border-custom-brown-300 place-self-center h-full mr-4 col-start-1 row-start-2'></div>

                                    <div className='flex flex-col gap-4 mb-4 items-center justify-center col-start-2 col-span-1'>
                                        {pills.map((pill) => (
                                            <ProjectPills text={pill.label} key={pill.label} />
                                        ))}
                                    </div>

                                    <div className='flex flex-col gap-2 items-center justify-center col-start-2 col-span-1'>
                                        {technology.map((tech) => (
                                            <TechItem icon={iconMap[tech.icon]} label={tech.label} key={tech.label} extended={true} />
                                        ))}
                                    </div>

                                </div>
                                <p className="text-md mb-4 col-start-1 col-span-4">{longDescription}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard;
