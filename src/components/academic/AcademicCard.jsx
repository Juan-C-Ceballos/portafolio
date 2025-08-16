import React from 'react';
import { CiLocationOn } from "react-icons/ci"

import { motion } from "framer-motion";

import useIsLargeScreen from '../../hooks/useIsLargeScreen';

const AcademicInfo = ({ title, institution, date, location, icon }) => {
    const isLarge = useIsLargeScreen();

    return (
        <motion.div className='flex flex-col lg:flex-row items-center gap-4 bg-custom-brown-50 px-4 py-2 shadow-xl rounded-2xl
            justify-between hover:scale-102 transition ease-in-out duration-200 m-2'
        >
            <img className={`${isLarge ? "w-40 h-50" : "w-[20%] h-[20%]"} object-contain flex-1/4`} src={icon} alt={`${title} icon`} />
            <div className='flex flex-3/4 flex-col items-center lg:items-end justify-center m-2'>
                <p className='text-center text-2xl font-semibold lg:text-end lg:pb-8'>{title}</p>
                <p className='text-center lg:text-end'>{institution}</p>
                <p className='text-center lg:text-end text-zinc-900/80'>{date}</p>
                <span className='text-center lg:text-end text-zinc-900/80'>{location} <CiLocationOn size={25} className='inline-block' /></span>
            </div>
        </motion.div>
    )
}


const AcademicCard = ({ title, institution, date, location, icon, photo, inverted = false }) => {
    const isLarge = useIsLargeScreen();

    return (
        <>
            {!inverted ? (
                <div className='flex flex-col lg:flex-row gap-4 items-center justify-center w-[60%] md:w-[80%] lg:w-[100%]'>
                    {!isLarge && (<img className='rounded-full h-40 w-40 hover:scale-105 transition ease-in-out duration-200 shadow-xl' src={photo} alt={title} />)}
                    <AcademicInfo title={title} institution={institution} date={date} location={location} icon={icon} />
                    {isLarge && (<img className='rounded-full h-60 w-60 hover:scale-105 transition ease-in-out duration-200 shadow-xl' src={photo} alt={title} />)}
                </div>
            ) : (
                <div className='flex flex-col lg:flex-row gap-4 items-center justify-center max-w-[60%] md:max-w-[80%] lg:max-w-[100%]'>
                    <img className={`rounded-full ${!isLarge ? 'h-40 w-40' : 'h-60 w-60'} hover:scale-105 transition ease-in-out duration-200 shadow-xl`} src={photo} alt={title} />
                    <AcademicInfo title={title} institution={institution} date={date} location={location} icon={icon} />
                </div>
            )}
        </>
    );
};

export default AcademicCard;