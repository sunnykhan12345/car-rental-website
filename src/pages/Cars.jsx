import Title from "../components/Title";
import { Filter, Search } from "lucide-react";
import React, { useState } from "react";
import { DummycarData } from "../components/../assets";
import CarCard from "../components/CarCard";
const Cars = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <div className="flex flex-col items-center py-20 bg-light max-md:px-4">
        <Title
          title="Available cars"
          subTitle="Browse your selection of premisum vehicles avialable for your next advanture"
        />
        <div className="bg-white flex items-center px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow cursor-pointer">
          <Search className="w-5 h-5 " />
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Search by make,Model or feature"
            className="w-full focus:outline-0 px-3 text-gray-500"
          />

          <Filter className="w-5 h-5 " />
        </div>
      </div>
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
        <p className="text-gray-500 xl:px-20 mx-auto max-w-7xl">Showing {DummycarData.length} Cars</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto">
          {DummycarData.map((car, index) => (
            <div key={index}>
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
