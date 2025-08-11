import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-blue-50 min-h-screen flex flex-col items-center justify-center'>
            <h1>Home Page</h1>
            <p>Bienvenido a la página de inicio.</p>
            <div className='flex flex-row gap-4 text-2xl font-bold cursor-pointer'>
                <Link to="/about">About</Link>
                <Link to="/work">Work</Link>
                <Link to="/academic">Academic</Link>
            </div>
        </div>
    );
};

export default Home;