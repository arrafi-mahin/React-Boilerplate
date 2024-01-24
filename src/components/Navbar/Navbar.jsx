import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/Icons/react-logo.svg';
import cancel from '../../assets/Icons/cancel.svg'
// import styles from './navbar.module.css'


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(()=>{
    setIsActive(false)
  },[location])
  return (
    <>
      <nav className="bg-white border-gray-200 border-b sticky top-0">
        <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowraptext-black">React Templete</span>
          </NavLink>
          <button onClick={() => setIsActive(true)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center md:hidden">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 ">
              <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-500' : 'text-black'} to="/" >Home</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-500' : 'text-black'} to="/shop" >Shop</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-500' : 'text-black'} to="/login" >Login</NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
      {/* Sidebar */}
    
       <div className="">
       <div className={`${isActive ? 'left-0':'-left-screen'} top-0 right-0 bottom-0 fixed z-10 bg-[#000000b4] shadow-lg `}>
          <img onClick={()=> setIsActive(false)} className='h-6 absolute right-6 top-6' src={cancel} alt="" />
          
        </div>
        <ul className= {`fixed bg-white font-medium flex flex-col gap-4 z-20 py-20 px-10 bottom-0  top-0 min-w-[50vw] max-w-[80vw] duration-500 ease-in-out ${isActive?'left-0':'left-[-100vw]'}`}>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'text-red-500' : 'text-black'} to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'text-red-500' : 'text-black'} to="/about-us" >About Us</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'text-red-500' : 'text-black'} to="/contact-us" >Contact us</NavLink>
            </li>
          </ul>
       </div>
      
    </>
  );
};

export default Navbar;
