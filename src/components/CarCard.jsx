import { BookUser, Car, MapPin, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/car-details/${car._id}`);
        scrollTo(0, 0);
      }}
      className="group rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 transition-all duration-500 cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image}
          alt="car"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {car.isAvailable && (
          <p className="absolute top-4 right-4 bg-primary/90 text-white text-xs px-2.5 py-1 rounded-full">
            Available Now
          </p>
        )}
        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white py-3 px-2 rounded-lg">
          <span className="font-semibold">
            {currency} {car.pricePerDay}
          </span>
          <span className="text-sm text-white/80">/ day</span>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold">
              {car.brand} {car.model}
            </h3>
            <p className="text-gray-500 text-sm">
              {car.category} • {car.year}
            </p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-y-2 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <Users /> <span>{car.seating_capacity} Seats</span>
          </div>
          <div className="flex items-center gap-2">
            <BookUser /> <span>{car.fuel_type}</span>
          </div>
          <div className="flex items-center gap-2">
            <Car /> <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin /> <span>{car.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
