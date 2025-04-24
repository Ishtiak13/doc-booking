import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Link, useRouteError } from 'react-router';

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <title>Phudu | Error</title>
            <Navbar></Navbar>
            <div className="text-center flex flex-col items-center mt-20">
      <img width={300}  src="https://i.postimg.cc/FR6QpptB/image.png" alt="Error Image" />
      <h1 className="text-5xl font-extrabold font-secondary text-red-700">{error.status} - Page {error.statusText}</h1>
      <p className="text-lg mt-4">Oops! The page you're looking for doesn't exist.</p>
      <Link to={'/'} className="btn rounded-full text-white bg-primaryColor text-lg md:text-xl font-bold md:py-4 md:px-8 mt-4">Go Back Home</Link>
    </div>
            
        </div>
    );
};

export default Error;