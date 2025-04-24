import React, { useState } from 'react';
import image1 from '../../assets/banner-img-1.png'
import image2 from '../../assets/hero bg.jpeg'
 
const Hero = ({handleSearch}) => {
  const [searchText, setSearchText]= useState('')

    return (
        <section className='p-16 border-4 rounded-3xl border-white shadow-lg my-20 bg-gradient-to-b from-white/0 to-white flex md:flex-col justify-center items-center flex-col-reverse space-y-6'>
            <div className='space-y-4'>
            <div className='text-[#0F0f0f] text-center max-w-[1180px] space-y-5'>
                <h1 className='text-5xl font-extrabold'>Dependable Care, Backed by Trusted Professionals.</h1>
            <p className='font-medium '>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <form onSubmit={(e)=>handleSearch(e, searchText)} className='w-full text-center space-y-4  md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center justify-center'>
                <input value={searchText} onChange={e=>setSearchText(e.target.value)}  className='w-[90%] md:w-[40%] py-2 px-2.5 md:py-4 md:px-5 rounded-full border border-black/10' type="text" placeholder='Search any doctor...' />
                <button className="btn rounded-full text-white bg-primaryColor text-lg md:text-xl font-bold md:py-7 md:px-8" type="submit" value="Search Now" >Search Now </button>
            </form>
            </div>
            <div className="flex gap-6 overflow-hidden">
  <img
    className="rounded-2xl w-full md:w-1/2 h-64 object-cover"
    src={image1}
    alt="Doctors"
  />
  <img
    className="rounded-2xl w-full md:w-1/2 h-64 object-cover hidden md:block"
    src={image2}
    alt="Doctors"
  />
</div>


        </section>
    );
};

export default Hero;