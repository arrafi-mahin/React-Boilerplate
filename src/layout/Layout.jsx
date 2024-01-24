import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function Layout() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
