import React from 'react';
import logo from '../../assets/logo (1).png'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-white p-10">
  <aside>
  <Link to='/' className="cursor-pointer flex  gap-1 items-center text-4xl font-extrabold"><span><img width={36} src={logo} alt="logo" /></span>Phudu</Link>
  <div className='flex gap-4 flex-col md:flex-row flex-wrap mt-4 text-lg text-black/60'>
  <Link to='/'>Home</Link>
            <Link to='my-bookings'>My-Bookings</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='contactUs'>Contact Us</Link>
  </div>
  </aside>
  <hr className='border w-[80%] border-black/20' />
  <nav className="grid grid-flow-col gap-4 ">
    
     <Link target='_blank' to='https://www.facebook.com/'><FaFacebook className='hover:text-blue-500' size={24}/></Link>
     <Link target='_blank' to='https://www.instagram.com/'><FaInstagram className='hover:text-[#d62976]' size={24}/></Link>
     <Link target='_blank' to='https://www.youtube.com/'><FaYoutube className='hover:text-red-500'  size={24}/></Link>
     <Link target='_blank' to='https://x.com/' > <FaXTwitter className='hover:text-blue-500'  size={24}/></Link>
     
     
    
   
  </nav>
</footer>
    );
};

export default Footer;