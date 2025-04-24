import React from "react";
import { FaInfo, FaRegRegistered } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router";
import Error from "../error/Error";
import DoctorError from "../error/DoctorError";
import { BsExclamationTriangle } from "react-icons/bs";
import { addDoctor, getBookedDoctor } from "../../utilities/addToLocal";
import { FaInfoCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import { getWeekDay } from "../../utilities/date";

const DoctorDetails = () => {
  const doctors = useLoaderData();
  const { id } = useParams();
  const doc = doctors.find((doctor) => doctor.registrationNumber === id);
  if (!doc) {
    return <DoctorError id={id}> </DoctorError>;
  }

  const {
    name,
    image,
    education,
    registrationNumber,
    speciality,
    workingAt,
    availability,
    consultationFee,
  } = doc;
  const isAvailableBooking = availability.includes(getWeekDay());
  const isAvailable = (
    <div className="badge badge-soft badge-success">Doctor Available Today</div>
  );
  const notAvailable = (
    <div className="badge badge-soft badge-error">
      Doctor is not Available Today
    </div>
  );

  const isBooked = getBookedDoctor().includes(registrationNumber);
  const handleBooking = (id, isAvailableBooking) => {
    const isAdded = addDoctor(id);
    if (!isAvailableBooking) {
      toast.error("Sorry! Doctor is not Available for Today!");
    } else if (isAdded) {
      toast.success("Successfully Added!");
    } else {
      toast("Appointment already scheduled for today.", {
        icon: <FaInfoCircle className="text-red-500"></FaInfoCircle>,
      });
    }
  };
  return (
    <div className="text-center flex justify-center flex-col items-center container mx-auto text-[#0F0F0F] my-20">
      <title>{`Phudu | ${registrationNumber}`}</title>
      <div className=" bg-white rounded-3xl w-full py-10">
        <h2 className="text-[40px] font-extrabold">Doctor's Profile Details</h2>
        <p className="max-w-[1009px] mx-auto">
          Explore the professional background, education, experience, and
          specialties of our verified doctors. Get to know the people behind the
          care you trust — each profile is designed to give you confidence in
          your healthcare choices.
        </p>
      </div>

      <div className="card lg:card-side rounded-3xl w-full lg:p-10 p-4 mt-8 bg-white gap-2">
        <figure className="flex justify-center overflow-hidden w-[335px] h-[383px] mx-auto">
          <img
            className="rounded-3xl  object-cover h-full"
            src={image}
            alt={`Photo of Dr. ${name}`}
          />
        </figure>
        <div className="card-body text-start">
          <div>
            <h2 className="card-title text-4xl font-extrabold">{name}</h2>
            <h3 className="text-lg font-medium text-[#0f0f0f80]">
              {education}
            </h3>
            <h3 className="text-lg font-medium text-[#0f0f0f80]">
              {speciality}
            </h3>
          </div>
          <p className="text-xl font-medium text-[#0f0f0f80]">
            Working at <br />{" "}
            <span className="font-bold text-[#0f0f0f]">{workingAt}</span>
          </p>
          <hr className="border border-dashed border-black/20" />
          <p className="flex gap-2 text-lg items-center">
            <FaRegRegistered size={18} /> Reg No: {registrationNumber}
          </p>
          <hr className="border border-dashed border-black/20" />
          <p className="font-bold text-lg">
            Availability:{" "}
            {availability.map((day, index) => (
              <span
                className="mr-2 btn rounded-full bg-[rgba(255,162,0,0.1)] border-[rgba(255,162,0,0.2)] text-[#FFA000]"
                key={index}
              >
                {" "}
                {day}
              </span>
            ))}
          </p>
          <p className="font-secondary font-extrabold text-lg">
            Consultation Fee:{" "}
            <span className="text-blue-500">
              Taka : {consultationFee}{" "}
              <span className="text-[#0f0f0f] font-normal">(incl. Vat)</span>
              <span className="font-normal"> Per consultation</span>
            </span>
          </p>
        </div>
      </div>
      <div className="rounded-3xl w-full py-10 bg-white mt-8 px-8">
        <h2 className="text-2xl mb-2.5 font-extrabold">
          Doctor's Profile Details
        </h2>
        <hr className="border border-dashed border-black/20" />
        <div className=" flex justify-between text-xl font-bold items-center my-4 mx-4">
          <p>Availability</p>
          <div>{isAvailableBooking ? isAvailable : notAvailable} </div>
        </div>
        <hr className="border border-black/20" />
        <div className="badge badge-soft badge-warning my-10 md:my-4 font-secondary font-medium ">
          {" "}
          <BsExclamationTriangle /> Due to high patient volume, we are currently
          accepting appointments for today only. We appreciate your
          understanding and cooperation.
        </div>
        <Link
          to={isAvailableBooking && !isBooked ? "/my-bookings" : ""}
          onClick={() => handleBooking(id, isAvailableBooking)}
          className="btn py-6 rounded-full hover:text-[#176AE5] border border-[#176AE5] hover:bg-transparent w-full text-lg font-bold bg-[#176AE5] text-white"
          type="submit"
        >
          Book Appointment Now
        </Link>
      </div>
    </div>
  );
};

export default DoctorDetails;
