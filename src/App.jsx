// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Cars from "./pages/Cars";
// import CarsDetails from "./pages/CarsDetails";
// import MyBooking from "./pages/MyBooking";
// import { Footer } from "./components/Footer";
// import Layout from "./pages/owner/Layout"
// import Addcart from "./pages/owner/AddCart";
// const App = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   return (
//     <>
//       <Navbar setShowLogin={setShowLogin} />
//       {showLogin && <div>Login Modal Goes Here</div>}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/car-details/:id" element={<CarsDetails />} />
//         <Route path="/cars" element={<Cars />} />
//         <Route path="/my-bookings" element={<MyBooking />} />
//         <Route path="/owner" element={<Layout />}>
//           <Route index element={<Dashbaord />} />
//           <Route index element={<Addcart />} />
//         </Route>
//       </Routes>
//       <Footer />
//     </>
//   );
// };

// export default App;


import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarsDetails from "./pages/CarsDetails";
import MyBooking from "./pages/MyBooking";
import { Footer } from "./components/Footer";
import Layout from "./pages/owner/Layout";
import Addcart from "./pages/owner/AddCart";
import Dashboard from "./pages/owner/Dashbaord"; 
import ManageCar from "./pages/owner/ManageCar"; 
import ManageBookings from "./pages/owner/ManageBookings"; 
import { useState } from "react";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar setShowLogin={setShowLogin} />
      {showLogin && <div>Login Modal Goes Here</div>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/car-details/:id" element={<CarsDetails />} />
        <Route path="/my-bookings" element={<MyBooking />} />

        {/* Owner Nested Routes */}
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} /> {/* default child route */}
          <Route path="add-cart" element={<Addcart />} />
          <Route path="manage-car" element={<ManageCar />} />
          <Route path="manage-booking" element={<ManageBookings />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
