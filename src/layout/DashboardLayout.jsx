import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router';
import DashboardNav from '../components/Navbar/DashboardNav';
import DashboardSidebar from '../components/Navbar/DashboardSidebar';

const DashboardLayout = () => {
    const [navHeight, setNavHeight] = useState(0);
    const navbarRef = useRef();

    useEffect(()=>{
        const navHight = navbarRef?.current?.offsetHeight + 'px';
        setNavHeight(navHight)
    },[])
    console.log();
    return (
        <div className="flex flex-col">
            <div ref={navbarRef} className="bg-red-500 w-full">
                <DashboardNav />
            </div>
            <div className={`flex h-[calc(100vh-${navHeight})]`}>
                <div className="h-full bg-blue-500 overflow-y-auto shrink-0 hidden md:block">
                    <DashboardSidebar />
                </div>
                <div className="h-full bg-orange-500 w-full overflow-y-auto ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;