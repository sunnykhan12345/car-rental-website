import { Filter, Search } from "lucide-react";
import React from "react";

const Title = ({ title, subTitle, align }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center ${
        align === "left" && "md:items-start md:text-left"
      }`}
    >
      <h1 className="font-semibold text-gray-700 text-2xl pb-3">{title}</h1>
      <p className="text-base font-normal">{subTitle}</p>
      <div className="bg-white flex items-center px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow cursor-pointer">
        <Search className="w-5 h-5 " />
        <input
          type="text"
          placeholder="Search by make,Model or feature"
          className="w-full focus:outline-0 px-3 text-gray-500"
        />
        <Filter className="w-5 h-5 " />
      </div>
    </div>
  );
};

export default Title;
