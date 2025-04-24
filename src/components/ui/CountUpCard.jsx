import React from 'react';
import CountUp from 'react-countup';
const CountUpCard = ({image, count, section}) => {
    return (
        <div className="text-center bg-white p-4 rounded-2xl">
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
        <img src={image} alt="" />
        </div>
        <h6 className="text-4xl font-bold text-deep-purple-accent-400">{<CountUp end={count} duration={10}></CountUp>}+</h6>
        <p className="mb-2 font-bold text-md">{section}</p>
        
      </div>
    );
};

export default CountUpCard;