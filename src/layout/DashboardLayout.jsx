import React, { useRef, useState } from 'react';
import { Outlet } from 'react-router';
import DashboardNav from '../components/Navbar/DashboardNav';
import DashboardSidebar from '../components/Navbar/DashboardSidebar';

/**
 * DashboardLayout component represents the overall layout structure for the dashboard.
 *
 * @component
 * @returns {JSX.Element} - Rendered component.
 */
const DashboardLayout = () => {
    // const [navHeight, setNavHeight] = useState(0);
    const [sideBar, setSideBar] = useState(false);
    const navbarRef = useRef();

    // useEffect(() => {
    //     const navHeightValue = navbarRef?.current?.offsetHeight + 'px';
    //     setNavHeight(navHeightValue);
    // }, []);

    return (
        <div className="flex flex-col">
            <div ref={navbarRef} className=" w-full">
                <DashboardNav sidebarHandler={() => setSideBar(!sideBar)} isOpen={sideBar} />
            </div>

            <div className={`flex h-[calc(100vh-64px)]`}> {/* substract navbar height */}
                <div className={`h-full  overflow-y-auto shrink-0 ${sideBar ? 'w-[50%]' : 'w-0'} md:w-auto transition-all duration-300`}>
                    <DashboardSidebar />
                </div>

                <div className="h-full w-full overflow-y-auto ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
