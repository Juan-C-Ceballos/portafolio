import React from 'react';
import { CiLocationOn } from "react-icons/ci"

import { motion } from "framer-motion";

const AcademicInfo = ({ title, institution, date, location, icon }) => {

    return (
        <motion.div className='flex flex-row items-center gap-4 bg-custom-brown-50 px-4 py-2 shadow-xl rounded-2xl
            justify-between hover:scale-102 transition ease-in-out duration-200 m-2'
        >
            <img className='w-40 h-50 object-contain flex-1/4' src={icon} alt={`${title} icon`} />
            <div className='flex flex-3/4 flex-col items-end justify-center m-2'>
                <h3 className='text-2xl font-semibold text-end pb-8'>{title}</h3>
                <p className='text-end'>{institution}</p>
                <p className='text-end text-zinc-900/80'>{date}</p>
                <span className='text-end text-zinc-900/80'>{location} <CiLocationOn size={25} className='inline-block' /></span>
            </div>
        </motion.div>
    )
}


const AcademicCard = ({ title, institution, date, location, icon, photo, inverted = false }) => {
    return (
        <>
            {!inverted ? (
                <div className='flex flex-row gap-4 items-center'>
                    <AcademicInfo title={title} institution={institution} date={date} location={location} icon={icon} />
                    <img className='rounded-full h-60 w-60 hover:scale-105 transition ease-in-out duration-200 shadow-xl' src={photo} alt={title} />
                </div>
            ) : (
                <div className='flex flex-row gap-4 items-center'>
                    <img className='rounded-full h-60 w-60 hover:scale-105 transition ease-in-out duration-200 shadow-xl' src={photo} alt={title} />
                    <AcademicInfo title={title} institution={institution} date={date} location={location} icon={icon} />
                </div>
            )}
        </>
    );
};

export default AcademicCard;