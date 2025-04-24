import React, { useEffect, useState } from 'react';
import Card from '../ui/Card';
import Sort from '../ui/Sort';
import { getWeekDay } from '../../utilities/date';

const Doctors = ({doctorsData}) => {
    const [viewBtn, setViewBtn] = useState(true)
    const [visibleDoctors, setVisibleDoctor] = useState(doctorsData)
    useEffect(() => {
        const sliced = viewBtn ? doctorsData.slice(0, 6) : doctorsData;
        setVisibleDoctor(sliced);
      }, [viewBtn, doctorsData]);
      const handleSortBy = (text) => {
        if (text === 'experience') {
          const sorted = [...visibleDoctors].sort((a, b) => {
            return parseInt(b.experience) - parseInt(a.experience);
          });
          setVisibleDoctor(sorted);
        } else {
          const date = getWeekDay()
          const sortedDoctors = [...visibleDoctors].sort((a, b) => {
            if (a.availability.includes(date) === b.availability.includes(date)) return 0; 
            if (a.status !== "available" && b.status === "available") return 1;
            return a.availability.includes(date)?-1:1; 
          });
          setVisibleDoctor(sortedDoctors);
        }
      };
      
      
    return (
        <div className='text-center flex justify-center flex-col items-center container mx-auto text-[#0F0F0F] mb-20'>
            <div className='max-w-[1009px]'>
            <h2 className='text-[40px] font-extrabold'>Our Best Doctors</h2>
            <p className=''>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <Sort handleSortBy={handleSortBy}></Sort>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {visibleDoctors.map((doctor) => (
          <Card key={doctor.id} doctor={doctor} />
        ))}
            </div>
            {visibleDoctors.length>=6 && <button className="btn rounded-full text-white bg-primaryColor text-lg md:text-xl font-bold md:py-7 md:px-8" type="submit" value="Search Now" onClick={()=>{setViewBtn(prev => !prev)
                if (!viewBtn) window.scrollTo({
                    top: 850,
                    behavior: 'smooth'
                  });}
            } >{viewBtn?'View All Doctors':'View Less'}</button>}
        </div>
    );
};

export default Doctors;