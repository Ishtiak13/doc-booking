import React from 'react';
import logo from '../../assets/logo (1).png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {
   

    return (
        <nav className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <Link to='/'>Home</Link>
            <Link to='my-bookings'>My-Bookings</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='contactUs'>Contact Us</Link>
            </ul>
          </div>
          <Link to='/' className="cursor-pointer flex gap-1 items-center text-2xl md:text-4xl font-extrabold"><span><img className='w-[24px]' src={logo} alt="logo" /></span>Phudu</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal flex gap-4 px-1 text-lg font-medium">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/my-bookings'>My-Bookings</NavLink>
            <NavLink to='/blogs'>Blogs</NavLink>
            <NavLink to='/contactUs'>Contact Us</NavLink>
          </div>
        </div>
        <div className="navbar-end">
          <Link to={'#'} className="btn rounded-full text-white bg-primaryColor text-lg md:text-xl font-bold md:py-4 md:px-8">Emergency</Link>
        </div>
      </nav>
    );
};

export default Navbar;