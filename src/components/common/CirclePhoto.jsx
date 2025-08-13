import react from 'react';


const CirclePhoto = ({ content }) => {
    return (
        <div className='bg-custom-brown-200 h-30 w-30 rounded-full flex items-center justify-center'>
            {content}
        </div>
    )
};

export default CirclePhoto;