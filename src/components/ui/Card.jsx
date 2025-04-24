import React from 'react';
import { FaRegRegistered } from "react-icons/fa6";
import {  useNavigate } from 'react-router';
import { getWeekDay } from '../../utilities/date';

const Card = ({doctor}) => {
  const navigate = useNavigate()
  const {
    name,
    image,
    education,
    experience,
    registrationNumber,
    availability
  } = doctor;
const isAvailableBooking =availability.includes(getWeekDay())
const isAvailable = <div className="badge font-bold badge-soft badge-success mb-2">Available</div>
const notAvailable = <div className="badge badge-soft font-bold badge-error mb-2">Not Available</div>
const handleViewDetails=()=>{
  navigate(`/doctorDetails/${registrationNumber}`);
}
    return (
      <div className="flex flex-col my-6 bg-white shadow-sm border border-slate-200 max-w-100 rounded-lg p-4 space-y-2.5">
      <div className="h-60 mb-2.5 overflow-hidden text-white rounded-md">
  <img className="object-cover object-top w-full h-full" src={image} alt="doctor-image" />
</div>

    
      <div className="flex gap-4">
      <div>{isAvailableBooking? isAvailable : notAvailable } </div>
        <div className="badge badge-soft font-bold badge-info">{experience}+ Year Experience</div>
      </div>
    
      <div className="flex flex-col flex-1">
        <div className="text-start mb-2">
          <h6 className="text-slate-800 text-2xl font-extrabold">{name}</h6>
          <p className="text-slate-600 text-lg font-medium">{education}</p>
        </div>
    
        
      </div>
      <hr className='border border-dashed border-black/20' />
    
    <div>
      <p className='text-lg font-medium text-slate-600 flex items-center gap-3'>
        <FaRegRegistered size={18} /> Reg No: {registrationNumber}
      </p>
    </div>
      <div className="px-4 pb-4 pt-0 mt-2">
        <button onClick={handleViewDetails}  className="btn rounded-full text-[#176AE5] border border-[#176AE5] bg-transparent w-full text-lg font-bold hover:bg-[#176AE5] hover:text-white" type="submit">View Details</button>
      </div>
    </div>
    
    );
};

export default Card;