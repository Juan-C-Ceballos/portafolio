import React, { useState } from 'react';
import { motion } from "framer-motion";
import LanguageGraph from '../components/academic/LanguageGraph';
import AcademicCard from '../components/academic/AcademicCard';
import useTranslation from '../hooks/useTranslation';
import UnderlinedText from '../components/common/UnderlinedText';
import LanguageCard from '../components/academic/LanguageCard';

const Academic = () => {
    const { t } = useTranslation();
    const academicItems = t('academic.academicInfo.items');
    const languagesItems = t('academic.languageInfo.languages');
    const languages = Object.values(languagesItems);

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <motion.div
            className='bg-custom-brown-400 min-h-screen flex flex-col items-center justify-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='grid grid-cols-2 gap-8 p-4'>
                <motion.div className='p-6 bg-custom-brown-250 rounded-4xl m-2'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0. },
                    }}>
                    <UnderlinedText>
                        <h1 className='text-4xl text-center text-zinc-900 font-bold mb-8'>{t('academic.academicInfo.title')}</h1>
                    </UnderlinedText>
                    <div className='flex flex-col items-center justify-start max-h-[75vh] overflow-y-scroll overflow-x-hidden gap-3 custom-scrollbar px-4'>
                        {academicItems.map((item) => (
                            <AcademicCard
                                key={item.title}
                                title={item.title}
                                institution={item.institution}
                                date={item.date}
                                location={item.location}
                                icon={item.icon}
                                photo={item.photo}
                                inverted={item.inverted}
                            />
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0. },
                    }}
                    className='p-6 bg-custom-brown-250 rounded-4xl m-2'>

                    <UnderlinedText>
                        <h1 className='text-4xl text-center text-zinc-900 font-bold mb-8'>{t('academic.languageInfo.title')}</h1>
                    </UnderlinedText>

                    <div className='bg-custom-brown-50 rounded-2xl p-8 shadow-xl
                        flex flex-col items-center m-4'>
                        <LanguageGraph />
                    </div>
                    <div className='flex gap-3 justify-center'>
                        {languages.map((lang, index) => (
                            <LanguageCard
                                key={lang.name}
                                name={lang.name}
                                description={lang.description}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)} // toggle
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Academic;
