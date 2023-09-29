import { Footer, Navbar } from '@/components';
import React from 'react';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <div className="">
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;