// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import {  useLocation } from "react-router-dom";
// const App = () => {
//   const[showLogin,setShowLogin] = useState(false)
//   const isOwner = useLocation().pathname.startsWith("/owner")
//   return <BrowserRouter>
//   {!isOwner && 
//   <Navbar setShowLogin={setShowLogin}/>
//   }
//   </BrowserRouter>;
// };

// export default App;

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarsDetails from "./pages/CarsDetails";
import MyBooking from "./pages/MyBooking";

const App = () => {
  const [showLogin, setShowLogin] = useState(false); 
  return (
    <>
      <Navbar setShowLogin={setShowLogin} />
      {showLogin && <div>Login Modal Goes Here</div>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarsDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBooking />} />
      </Routes>
    </>
  );
};

export default App;


