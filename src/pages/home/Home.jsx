import React, { useState } from 'react';
import Hero from '../../components/sections/hero';
import Doctors from '../../components/sections/Doctors';
import { useLoaderData } from 'react-router';
import Status from '../../components/sections/Status';


const Home = () => {
    const doctorsData = useLoaderData()
    const [doctors, setDoctors] = useState(doctorsData)
    const handleSearch =(e, text)=>{
       
        e.preventDefault()
        if (!text){
            setDoctors(doctorsData)
            return
        }
        const searchDoctor = doctorsData.filter(doctor => 
            doctor.name.toLowerCase().split(' ').includes(text.toLowerCase()) ||
            doctor.speciality.toLowerCase().split(' ').includes(text.toLowerCase())
        )
        setDoctors(searchDoctor)
    }
    return (
        <div>
            <title>Phudu | Home</title>
            <Hero handleSearch={handleSearch}></Hero>
            <Doctors doctorsData={doctors}></Doctors>
       <Status></Status>
        </div>
    );
};

export default Home;