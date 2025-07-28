import React, { useState } from "react";
import maincars from "../assets/main-car.png";
import { CityList } from "../assets";
import { Search } from "lucide-react";
const Hero = () => {
  const [pickupLocations, setPickupLocations] = useState("");
  return (
    <div className="h-screen bg-light flex flex-col justify-center text-center gap-14 items-center">
      <h1 className="text-4xl md:text-5xl font-semibold">
        Luxury cars on Rent
      </h1>
      <form
        className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg
       md:rounded-full w-full max-w-84 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:pl-8">
          <div className="flex flex-col items-start gap-2">
            <select
              required
              className=""
              value={pickupLocations}
              onChange={(e) => setPickupLocations(e.target.value)}
            >
              <option value="">Pickup Location</option>
              {CityList.map((city, index) => (
                <option key={index} value={city.value}>
                  {city.name}
                </option>
              ))}
            </select>
            <p className="text-sm text-gray-500">
              {pickupLocations ? pickupLocations : "please select locations"}
            </p>
          </div>
          {/* second */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickup-date">Pick-up date</label>
            <input
              type="date"
              id="pick-up"
              min={new Date().toISOString().split("T")[0]}
              className="text-sm text-gray-500"
              required
            />
          </div>
          {/* third */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="return-date">Return date</label>
            <input
              type="date"
              id="return-date"
              className="text-sm text-gray-500"
              required
            />
          </div>
        </div>
        <button className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer">
          <Search />
          <span>Search</span>
        </button>
      </form>
      <img
        src={maincars}
        alt="main-cars"
        className="max-h-74  max-w-74 w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;
