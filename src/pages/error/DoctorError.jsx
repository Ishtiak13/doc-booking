import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { Link } from 'react-router';

const DoctorError = ({id}) => {
    return (
        <div>
            <div  className="text-center flex flex-col justify-center items-center my-[50px]">
      <img width={300} className="rounded-full" src="https://static.vecteezy.com/system/resources/previews/022/919/630/non_2x/search-no-result-data-document-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" alt="Error" />
      <h2 className="text-3xl mt-8">No Doctor Found!</h2>
      <p className="flex gap-2 items-center my-4 text-xl text-gray-500"><FiPlusCircle></FiPlusCircle> {id}</p>
      <Link to={'/'} className="btn rounded-full text-white bg-primaryColor text-lg md:text-xl font-bold md:py-4 md:px-8">Go to Homepage</Link>
    </div>
        </div>
    );
};

export default DoctorError;