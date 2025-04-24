import React, { useEffect, useState } from 'react';
import { deleteDocData, getBookedDoctor } from '../../utilities/addToLocal';
import { Link, useLoaderData } from 'react-router';
import AppointmentCard from '../../components/ui/AppointmentCard';
import Error from '../error/Error';
import AppointmentChart from '../../components/charts/AppointmentChart';

const MyBookings = () => {
    const doctors = useLoaderData();
    const [bookedDoc, setBookedDoc] = useState([]);
    
    useEffect(()=>{
        const booked = getBookedDoctor()
        const filteredDoc = doctors.filter(doctor=> booked.includes(doctor.registrationNumber))
        setBookedDoc(filteredDoc)
    },[doctors])
    const handleCancel = (id) => {
        deleteDocData(id);
        setBookedDoc(prev => prev.filter(doctor => doctor.registrationNumber !== id));
    };
    
    return (
        <div>
            <title>Phudu | Booking</title>
           <div className='flex justify-center'>
            {bookedDoc.length===0? "" :<AppointmentChart bookedDoc={bookedDoc}></AppointmentChart>}
           </div>
           <div className='text-center my-10'>
            <h2 className='text-[40px] font-extrabold'>My Today Appointments</h2>
            <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            <div className='space-y-4 mt-6'>
               {bookedDoc.length===0? <Link to={'/'} className="btn rounded-full text-white bg-primaryColor text-lg md:text-xl font-bold md:py-4 md:px-8 md:my-42 my-22">Book an Appointment</Link> :bookedDoc.map(doctor =>  <AppointmentCard key={doctor.id} doctor={doctor} onCancel={handleCancel} ></AppointmentCard>)}
            </div>
           </div>
        </div>
    );
};

export default MyBookings;