import React from 'react';
import { motion } from "framer-motion";

import ProjectCard from '../components/work/ProjectCard';
import useTranslation from '../hooks/useTranslation';

const Work = () => {
    const { t } = useTranslation();
    const projects = t('work.projects');

    return (
        <motion.div
            className='bg-custom-brown-100 min-h-screen flex flex-col items-center justify-center max-w-full overflow-hidden'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='flex flex-col lg:grid lg:grid-cols-3 gap-y-10 gap-x-5 p-20 md:p-10 items-start'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        date={project.date}
                        pills={project.pills}
                        technology={project.technology}
                        photo={project.photo}
                        photoCarousel={project.photoCarousel}
                        longDescription={project.longDescription}
                        language={project.language}
                        seeMore={t('work.seeMore')}
                    />
                ))}
            </div>

        </motion.div>
    );
};

export default Work;
