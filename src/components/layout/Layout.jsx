import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import ContactSidebar from './Navbar/ContactSidebar';

const Layout = () => {
    const location = useLocation();

    const isHome = location.pathname === '/';
    const isWork = location.pathname === '/work';

    const bgColor = (isHome || isWork) ? 'bg-custom-brown-100' : 'bg-custom-brown-400';

    return (
        <div className={`flex flex-col min-h-screen font-inter ${bgColor}`}>
            <Navbar />
            <ContactSidebar />
            <main className='flex-grow'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;