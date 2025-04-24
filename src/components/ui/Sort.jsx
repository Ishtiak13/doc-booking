import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Sort = ({handleSortBy}) => {
    return (
        <div className="dropdown dropdown-center">
        <div tabIndex={0} role="button" className="btn bg-primaryColor text-white m-1 rounded-full">Sort by <FaChevronDown /></div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li onClick={()=>handleSortBy('availability')}><a>Availability</a></li>
          <li onClick={()=>handleSortBy('experience')}><a>Experience</a></li>
        </ul>
      </div>
    );
};

export default Sort;