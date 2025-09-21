import React, { useState } from "react";
import { MenuLinks } from "../assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, LogOut, MenuIcon, Search } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
const Navbar = () => {
  const { setShowLogin, user, isOwner, axios, setIsOwener } = useAppContext();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const changegeRole = async () => {
    try {
      const { data } = await axios.post("/api/owner/change-role");
      if (data.success) {
        setIsOwener(true);
        toast.success(data.message);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className={`flex z-10 items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-3 text-gray-600 border-b border-bordercolor relative transition-all
   ${location.pathname === "/" && "bg-light"}`}
    >
      <Link to="/" className="text-4xl font-bold">
        Car Rental
      </Link>

      <div
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-bordercolor
        right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 sm:p-4 transition-all
        duration-300 z-50 ${
          location.pathname === "/" ? "bg-light pl-6 pt-3" : "bg-white"
        } ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        {MenuLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.name}
          </Link>
        ))}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-bordercolor px-3 rounded-full max-w-56 ">
          <input
            type="text"
            placeholder="Search product"
            className="placeholder-gray-500 focus:outline-0 py-1.5 w-full bg-transparent"
          />
          <Search className="w-6 h-6 flex-shrink-0" />
        </div>
        <div className="flex items-start sm:items-center max-sm:flex-col gap-6">
          <button
            onClick={() => (isOwner ? navigate("/owner") : changegeRole())}
            className="cursor-pointer"
          >
            {isOwner ? "Dashbaord" : "List cars"}
          </button>

          <button
            onClick={() => {
              user ? LogOut() : setShowLogin(true);
            }}
            className="cursor-pointer px-8 py-2 text-white bg-primary hover:bg-primary-dull rounded-lg transition-all"
          >
            {user ? "Logout" : "Login"}
          </button>
        </div>
      </div>
      <button
        className="sm:hidden cursor-pointer"
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </button>
    </div>
  );
};

export default Navbar;
