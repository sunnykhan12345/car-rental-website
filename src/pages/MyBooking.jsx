// import { useEffect, useState } from "react";
// import Title from "../components/Title";
// import { DummyBookingData } from "../assets";
// import { CalendarRangeIcon, PinIcon } from "lucide-react";

// const MyBooking = () => {
//   const [booking, setBooking] = useState([]);

//   const fetchBookings = async () => {
//     setBooking(DummyBookingData);
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []); // Only run once on mount

//   return (
//     <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl">
//       <Title
//         title="My Bookings"
//         subTitle="View and manage all car bookings"
//         align="left"
//       />
//       <div>
//         {booking.map((bookingItem, index) => (
//           <div
//             key={index}
//             className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-bordercolor rounded-lg mt-5 first:mt-12"
//           >
//             {/* Car Image and Info */}
//             <div className="md:col-span-1">
//               <div className="rounded-lg overflow-hidden mb-3">
//                 <img
//                   src={bookingItem?.car?.image || "/fallback.jpg"} // fallback in case image is missing
//                   alt={bookingItem?.car?.brand || "Car Image"}
//                   className="w-full h-auto aspect-video object-cover"
//                 />
//               </div>
//               <p>
//                 {bookingItem?.car?.brand || "No Brand"}{" "}
//                 {bookingItem?.car?.model || "No model"}
//               </p>
//               <p className="text-gray-500">
//                 {bookingItem?.car?.year || "No year"} .
//                 {bookingItem?.car?.category || "No category"}
//                 {bookingItem?.car?.location || "No location"}
//               </p>
//             </div>
//             {/* Additional Booking Info (Optional) */}
//             <div className="md:col-span-1">
//               <div className="flex items-center gap-2">
//                 <p className=" px-3 py-1.5 bg-light rounded-full">
//                   Booking #{index + 1}
//                 </p>
//                 <p
//                   className={`px-3 py-1 text-xs rounded-full ${
//                     bookingItem.status === "confirmed"
//                       ? "bg-green-400/15 text-green-600"
//                       : "bg-red-400/15 text-red-600"
//                   }`}
//                 >
//                   {bookingItem.status}
//                 </p>

//                 {/* <p>${bookingItem.price}</p>
//                 <p>{new Date(bookingItem.pickupDate).toDateString()}</p>
//                 <p>{new Date(bookingItem.returndate).toDateString()}</p> */}
//               </div>
//               <div className="flex items-start gap-2 mt-3">
//                 <CalendarRangeIcon className="w-4 h-4 mt-1" />
//                 <div>
//                   <p className="text-gray-500">Rental Period</p>
//                   <p>
//                     {new Date(bookingItem.pickupDate).toLocaleDateString()} to{" "}
//                     {new Date(bookingItem.returndate).toLocaleDateString()}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-2 mt-3">
//                 <PinIcon className="w-4 h-4 mt-1" />
//                 <div>
//                   <p className="text-gray-500">Pickup location</p>
//                   <p>{bookingItem.car.location}</p>
//                 </div>
//               </div>
//             </div>
//             {/* price */}
//             <div className="md:col-span-1 flex flex-col justify-between gap-6">
//               <div className="text-sm text-gray-500 text-right">
//                 <p>Total Price</p>
//                 <h1 className="text-2xl font-semibold text-primary">${bookingItem.price}</h1>
//                 <p>Booked on {bookingItem.createdAt}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyBooking;
import { useEffect, useState } from "react";
import Title from "../components/Title";
import { DummyBookingData } from "../assets";
import { CalendarRangeIcon, Loader, MapPin, PinIcon } from "lucide-react";

const MyBooking = () => {
  const [booking, setBooking] = useState([]);

  const fetchBookings = async () => {
    setBooking(DummyBookingData);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl">
      <Title
        title="My Bookings"
        subTitle="View and manage all car bookings"
        align="left"
      />

      <div>
        {booking.map((bookingItem, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-bordercolor rounded-lg mt-5 first:mt-12"
          >
            {/* Car Info */}
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden mb-3">
                <img
                  src={bookingItem?.car?.image || "/fallback.jpg"}
                  alt={`${bookingItem?.car?.brand || "Car"} Image`}
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
              <p className="font-medium">
                {bookingItem?.car?.brand || "No Brand"}{" "}
                {bookingItem?.car?.model || ""}
              </p>
              <p className="text-gray-500">
                {bookingItem?.car?.year || "N/A"} ·{" "}
                {bookingItem?.car?.category || "Category"} ·{" "}
                {bookingItem?.car?.location || "Location"}
              </p>
            </div>

            {/* Booking Info */}
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2">
                <p className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full">
                  Booking #{index + 1}
                </p>
                <p
                  className={`px-3 py-1 text-xs rounded-full ${
                    bookingItem.status === "confirmed"
                      ? "bg-green-400/15 text-green-600"
                      : "bg-red-400/15 text-red-600"
                  }`}
                >
                  {bookingItem.status}
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CalendarRangeIcon className="w-4 h-4 mt-1" />
                <div>
                  <p className="text-gray-500">Rental Period</p>
                  <p>
                    {new Date(bookingItem.pickupDate).toLocaleDateString()} to{" "}
                    {new Date(bookingItem.returndate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <div>
                  <p className="text-gray-500">Pickup Location</p>
                  <p>{bookingItem?.car?.location || "Not specified"}</p>
                </div>
              </div>
            </div>

            {/* Price Info */}
            <div className="md:col-span-1 flex flex-col justify-between text-right">
              <div className="text-sm text-gray-500">
                <p>Total Price</p>
                <h1 className="text-2xl font-semibold text-primary">
                  ${bookingItem.price}
                </h1>
                <p className="text-xs mt-2">
                  Booked on{" "}
                  {new Date(bookingItem.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
