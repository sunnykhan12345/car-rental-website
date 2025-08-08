import React, { useState } from "react";
import Title from "../../components/Title";
import upload_icon from "../../assets/upload_icon.png"; // <-- ADD THIS

const AddCart = () => {
  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 0,
    pricePerDay: 0,
    category: "",
    fuel_type: "",
    seating_capacity: 0,
    location: "",
    description: "",
  });

  const handleSubmitHnadler = async (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title
        title="Add New Car"
        subTitle="Fill in details to list a new car for booking, including pricing, availability, and car specifications"
      />
      <form
        onSubmit={handleSubmitHnadler}
        className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl"
      >
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="car-image" className="cursor-pointer">
            <img
              src={image ? URL.createObjectURL(image) : upload_icon}
              alt="Car Upload"
              className="h-14 w-14 object-cover rounded"
            />
            <input
              type="file"
              id="car-image"
              accept="image/*"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <p className="text-sm text-gray-500 mt-2">
            Upload a picture of your car
          </p>
        </div>
        {/* car brand & model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="e.g BMW, Mercedes, Audi..."
              required
              className="px-3 py-2 mt-1 border border-bordercolor rounded-md outline-none"
              value={car.brand}
              onChange={(e) => setCar({ ...car, brand: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="e.g BMW, Mercedes, Audi..."
              required
              className="px-3 py-2 mt-1 border border-bordercolor rounded-md outline-none"
              value={car.brand}
              onChange={(e) => setCar({ ...car, brand: e.target.value })}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCart;
