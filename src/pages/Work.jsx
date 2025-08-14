import React from 'react';
import { motion } from "framer-motion";

import ProjectCard from '../components/work/ProjectCard';
import useTranslation from '../hooks/useTranslation';

const Work = () => {
    const { t } = useTranslation();
    const projects = t('work.projects');

    return (
        <motion.div
            className='bg-custom-brown-100 min-h-screen flex flex-col items-center justify-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='grid grid-cols-3 gap-y-10 gap-x-5 p-10'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        date={project.date}
                        pills={project.pills}
                        technology={project.technology}
                        photo={project.photo}
                        longDescription={project.longDescription}
                        seeMore={t('work.seeMore')}
                    />
                ))}
            </div>

        </motion.div>
    );
};

export default Work;
