import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DummycarData } from "../assets";
const currency = import.meta.env.VITE_CURRENCY;
import {
  ArrowLeft,
  BadgeCheck,
  Car,
  Contact,
  MapPin,
  Pin,
  Users,
} from "lucide-react";
import Loader from "../components/Loader";

const CarsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setCar(DummycarData.find((car) => car._id === id));
  }, [id]);

  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 my-16">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 mb-6 cursor-pointer"
      >
        <ArrowLeft />
        <span>Back to all cars</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Car Section */}
        <div className="lg:col-span-2">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md"
          />
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">
                {car.brand} {car.model}
              </h1>
              <p className="text-gray-500 text-lg">
                {car.category} - {car.year}
              </p>
            </div>
            <hr className="border border-bordercolor my-6" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-100 text-sm hover:bg-gray-200 transition-all duration-500 cursor-pointer rounded-md w-fit px-10 py-2 text-center flex flex-col justify-center items-center space-y-1">
                <Users className="" />
                <p className="font-semibold">{car.seating_capacity} Seats</p>
              </div>
              <div className="bg-gray-100 text-sm hover:bg-gray-200 transition-all duration-500 cursor-pointer rounded-md w-fit px-10 py-2 text-center flex flex-col justify-center items-center space-y-1">
                <Contact />
                <p className="font-semibold">{car.fuel_type}</p>
              </div>
              <div className="bg-gray-100 text-sm hover:bg-gray-200 transition-all duration-500 cursor-pointer rounded-md w-fit px-10 py-2 text-center flex flex-col justify-center items-center space-y-1">
                <Car />
                <p className="font-semibold">{car.transmission}</p>
              </div>

              <div className="bg-gray-100 text-sm hover:bg-gray-200 transition-all duration-500 cursor-pointer rounded-md w-fit px-10 py-2 text-center flex flex-col justify-center items-center space-y-1">
                <MapPin />
                <p className="font-semibold">{car.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section (you can add form fields here) */}
        <form
          onClick={handleSubmit}
          className="h-max sticky rounded-xl shadow-lg text-gray-500 space-y-6 p-6 "
        >
          <p className="flex justify-between items-center text-2xl font-semibold text-gray-800">
            {currency} {car.pricePerDay}{" "}
            <span className="text-gray-400 text-base font-normal">per day</span>
          </p>
          <hr className="border-bordercolor my-6" />
          <div className="flex flex-col gap-2">
            <label htmlFor="pickup-date">Pick-up Date</label>
            <input
              type="date"
              className="border border-bordercolor px-3 py-2"
              required
              id="pickuo-date"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="return-date">Return Date</label>
            <input
              type="date"
              className="border border-bordercolor px-3 py-2"
              required
              id="return-date"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <button className="w-full bg-primary hover:bg-primary-dull transition-all py-3 font-medium text-xl text-white rounded-xl cursor-pointer">
            Book Now
          </button>
          <p className="text-center text-sm">
            No credit card required to reserved
          </p>
        </form>
      </div>
      {/* desciptions */}
      <div className="mt-10 ">
        <h1 className="text-xl font-medium mb-3">Desciption</h1>
        <p className="text-gray-600 max-w-xl">{car.desciption}</p>
      </div>
      {/* features */}
      <div className="mt-10 ">
        <h1 className="text-xl font-medium mb-3">features</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2">
          {[
            "360 Camera",
            "Blutooth",
            "GPS",
            "Heated Seats",
            "Rear View Mirror",
          ].map((item) => (
            <li key={item} className="flex items-center text-gray-500">
              <BadgeCheck className="mr-2 h-4 w-4" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <p className="text-center my-10">
      <Loader />
    </p>
  );
};

export default CarsDetails;
