import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Root = () => {
    return (
        <div  className="bg-[#EFEFEF] min-h-screen">
            <Navbar></Navbar>
            <main className=" mx-auto px-3 lg:px-30">
            <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;