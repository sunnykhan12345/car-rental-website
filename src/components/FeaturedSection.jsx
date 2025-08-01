import React from "react";
import { DummycarData } from "../assets"; // Make sure DummycarData is exported correctly
import CarCard from "./CarCard";
import Title from "./Title";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
const FeaturedSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32">
      <div>
        <Title
          title="Featured Vehicles"
          subTitle="Explore our selection of premium vehicles available for your next adventure"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-18 gap-8">
        {DummycarData.slice(0, 6).map((car) => (
          <div key={car._id}>
            <CarCard car={car} />
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/cars").scrollTo(0, 0)}
        className="flex items-center justify-center gap-2 px-6 py-2 border border-e-bordercolor hover:bg-gray-50 rounded-md mt-18 cursor-pointer"
      >
        Explore all cars
        <span>
          <ArrowRight />
        </span>
      </button>
    </div>
  );
};

export default FeaturedSection;
