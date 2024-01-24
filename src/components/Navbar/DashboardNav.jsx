import React from 'react';
import Menu from '../../assets/Icons/Menu.svg?react';
import Cross from '../../assets/Icons/cancel.svg?react';
const DashboardNav = ({sidebarHandler, isOpen}) => {
    // const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="flex justify-between text-right p-5 bg-red-500">
            <button onClick={sidebarHandler} className=" block md:hidden">
              {isOpen ? <Cross className='fill-white h-4 w-4' /> : <Menu className='stroke-white' />}
            </button>
            <p className="hidden md:block">Logo</p>
            <div>
                <p className="">Dashboard Navbar</p>
            </div>
        </div>
    );
};

export default DashboardNav;
