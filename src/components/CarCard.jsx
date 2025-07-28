import React from 'react'
import cars from "../assets/main-car.png"
const CarCard = ({car}) => {
    const currency = import.meta.env.VITE_CURRENCY;
  return (
    <div className=" group rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 transition-all duration-500 cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img
          src={cars}
          alt="car"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <p className="absolute top-4 right-4 bg-primary/90 text-white text-xs px-2.5 py-1 rounded-full">
          Available Now
        </p>
        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white py-3 px-2 rounded-lg ">
          <span className="font-semibold">{currency} 50</span>
          <span className="text-sm text-white/80">/ day</span>
        </div>
      </div>
    </div>
  );
}

export default CarCard