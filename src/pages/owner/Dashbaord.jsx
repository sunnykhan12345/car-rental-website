"use client";
import { CardSim } from "lucide-react";
import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { DummyDashboardgData } from "../../assets";

const Dashboard = () => {
  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  });

  useEffect(() => {
    // Calculate dashboard data from DummyDashboardgData
    const totalCars = new Set(DummyDashboardgData.map((item) => item.car._id))
      .size;
    const totalBookings = DummyDashboardgData.length;
    const pendingBookings = DummyDashboardgData.filter(
      (item) => item.status === "pending"
    ).length;
    const recentBookings = DummyDashboardgData.slice(0, 4);
    const monthlyRevenue = DummyDashboardgData.reduce(
      (sum, item) => sum + (item.status === "confirmed" ? item.price : 0),
      0
    );

    setData({
      totalCars,
      totalBookings,
      pendingBookings,
      recentBookings,
      monthlyRevenue,
    });
  }, []);

  const dashboardCards = [
    {
      title: "Total Cars",
      value: data.totalCars,
      icon: <CardSim className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Total Bookings",
      value: data.totalBookings,
      icon: <CardSim className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Pending",
      value: data.pendingBookings,
      icon: <CardSim className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Revenue",
      value: `$${data.monthlyRevenue}`,
      icon: <CardSim className="w-5 h-5 text-blue-500" />,
    },
  ];

  return (
    <div className="px-4 pt-10 flex-1">
      <Title
        title="Admin Dashboard"
        subTitle="Monitor platform performance including total cars, bookings, revenue, and recent activities"
      />

      {/* Dashboard Cards */}
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
            <div className="bg-blue-100 text-white w-7 h-7 rounded-full flex items-center justify-center">
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="flex flex-wrap items-start gap-6 mb-8 w-full">
        <div className="p-4 md:p-6 border border-bordercolor rounded-md max-w-lg w-full">
          <h1 className="text-lg font-medium">Recent Bookings</h1>
          <p className="text-gray-500">Latest customer bookings</p>

          {data.recentBookings.map((booking, index) => (
            <div
              key={index}
              className="mt-4 flex items-center justify-between  pb-2"
            >
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 text-white w-7 h-7 rounded-full flex items-center justify-center">
                  <CardSim className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <p>
                    {booking.car.brand} {booking.car.model}
                  </p>
                  <p className="text-sm text-gray-500">
                    {booking.createdAt?.split("T")[0]}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-medium">
                <p className="text-sm text-gray-500">${booking.price}</p>
                <p className="px-3 py-0.5 border border-bordercolor rounded-full text-gray-500">
                  {booking.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* monthel renue */}
        <div className="flex-1 p-4 md:p-6 border border-bordercolor rounded-md w-full md:max-w-xs">

          <h1 className="text-lg font-medium">Monthely Revenue</h1>
          <p className="text-gray-500">Revenue for current month</p>
          <p className="text-3xl mt-6 font-semibold text-blue-600">${data.monthlyRevenue} </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
