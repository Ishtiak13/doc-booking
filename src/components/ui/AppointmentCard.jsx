import React from 'react';
import toast from 'react-hot-toast';
// import { deleteDocData } from '../../utilities/addToLocal';

const AppointmentCard = ({doctor, onCancel}) => {
    const handleCancelAppointment =(id)=>{
        toast.error("Your appointment has been cancelled.")
        onCancel(id);
    }
    return (
        <div className=' bg-white rounded-2xl p-8 text-start'>
            <div className='flex justify-between items-center flex-col md:flex-row'>
                <div >
                    <h1 className='text-xl font-extrabold'>{doctor.name}</h1>
                    <p className='text-lg font-medium text-[rgba(15,15,15,0.6)]'>{doctor.education}</p>
                </div>
                <p className='text-lg font-medium text-[rgba(15,15,15,0.6)]'> Appointment Fee : {doctor.consultationFee} Taka + Vat</p>
            </div>
            <hr className='border border-dashed border-black/20 my-4' />
            <button onClick={()=>handleCancelAppointment(doctor.registrationNumber)}  className="btn rounded-full text-red-500 border border-red-500 bg-transparent w-full text-lg font-bold hover:bg-[#e51717] hover:text-white " type="submit">Cancel Appointment</button>
        </div>
    );
};

export default AppointmentCard;