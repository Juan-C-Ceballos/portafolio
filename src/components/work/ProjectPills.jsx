import React from 'react';

const ProjectPills = ({ text }) => {
    return (
        <div className='bg-custom-brown-200 rounded-2xl py-2 px-4
            hover:bg-custom-brown-250 transition ease-in-out duration-200 text-center'>
            <span className='text-center'>{text}</span>
        </div>
    );
};

export default ProjectPills;