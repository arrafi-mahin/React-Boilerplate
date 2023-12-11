import React from 'react';

const DashboardSidebar = () => {
    return (
        <div className='p-5'>
            <p>Sidebar</p>
        </div>
    );
};

// Side bar
const Sidebar = ({ show, onClose }) => {
    return ReactDOM.createPortal(
        <div className={`bg-[#00000098] bottom-0 absolute top-0  ${show ? 'w-full' : 'w-0'} transition-all duration-300`}>
            <div className="flex justify-end pt-5 pr-5">
                <Cross onClick={onClose} className='h-5 w-5 fill-slate-300' />
            </div>
            <div className={`bg-white absolute top-0 bottom-0 left-0  ${show ? 'w-[70vw]' : 'w-0'} transition-all duration-300 shrink-0 overflow-hidden`}>
                <div className="p-5 shrink-0">
                    <p className="">Hello world</p>
                </div>
            </div>
        </div>,
        document.querySelector('#sidebar')
    )
}

export default DashboardSidebar;