import React from 'react';
import TotalDoc from '../../assets/success-doctor.png'
import Review from '../../assets/success-review.png'
import Patients from '../../assets/success-patients.png'
import Stuffs from '../../assets/success-staffs.png'
import CountUp from 'react-countup';
import CountUpCard from '../ui/CountUpCard';

const Status = () => {
    return (<section>
<div className='text-center'>
            <h2 className='text-[40px] font-extrabold'>We Provide Best Medical Services</h2>
            <p className=''>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        
        <CountUpCard image={TotalDoc} count={199} section={'Total Doctors'}></CountUpCard>
        <CountUpCard image={Review} count={679} section={'Total Reviews'}></CountUpCard>
        <CountUpCard image={Patients} count={1900} section={'Patients'}></CountUpCard>
        <CountUpCard image={Stuffs} count={300} section={'Total Stuffs'}></CountUpCard>
      </div>
    </div>
    </section>
  );
};

export default Status;