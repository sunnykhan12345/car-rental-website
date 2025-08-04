import { CardSim } from "lucide-react";
import React, { useEffect, useState } from "react";
import Title from "../../components/Title"
const Dashboard = () => {
  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  });

  const dashboardCards = [
    {
      title: "Total Cars",
      value: data.totalCars,
      icon: <CardSim className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Total Bookings",
      value: data.totalCars,
      icon: <CardSim className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Pending",
      value: data.totalCars,
      icon: <CardSim className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Confirmed",
      value: data.totalCars,
      icon: <CardSim className="w-5 h-5 text-blue-500" />,
    },
  ];

  useEffect(() =>{
    setData("")
  })
  return (
    <div className="px-4 pt-10 flex-1">
      <Title
        title="Admin Dashbaord"
        subTitle="Monitor platform performance including total cars,booking,revenue,adn recent activities"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-between p-4 rounded-md border border-bordercolor"
          >
            <div>
              <h2 className="text-gray-500 text-xs">{card.title}</h2>
              <p className="text-lg font-semibold">{card.value}</p>
            </div>

            <p className="bg-blue-100 text-white w-7 h-7 rounded-full flex items-center justify-center">
              {card.icon}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-start gap-6 mb-8 w-full">
        {/* rectent booking */}
        <div className="p-4 md:p-6 border border-bordercolor rounded-md max-w-lg">
          <h1 className="text-lg font-medium">Recent Booking</h1>
          <p className="text-gray-500">Latest customer bookings</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
