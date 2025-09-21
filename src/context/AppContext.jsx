import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
const currency = import.meta.env.VITE_CURRENCY;
export const AppContext = createContext();

export const AppProivder = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isOwner, setIsOwener] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [pickUpDate, setPickUpDate] = useState("");
  const [returnDate, setRuternDate] = useState("");
  const [cars, setcCars] = useState([]);

  // function to chec is user logedin
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/data");
      if (data.success) {
        setUser(data.user);
        setIsOwener(data.user.role === "owner");
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // function to fetch all cars from the server
  const fetchCars = async () => {
    try {
      const { data } = await axios.fetch("/api/user/cars");
      data.success ? setcCars(data.cars) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // useeffect to retrive the token from localhost
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    setcCars();
  }, []);

  // function to logout the user
  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsOwener(false);
    axios.defaults.headers.common["Authorization"] = "";
    toast.success("You Have been logged out");
  };
  // useeffect to fecth user data when user is avialabel
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `${token}`;
      fetchUser();
    }
  }, [token]);
  const value = {
    navigate,
    currency,
    axios,
    user,
    setUser,
    token,
    setToken,
    isOwner,
    setIsOwener,
    fetchUser,
    showLogin,
    setShowLogin,
    logOut,
    fetchCars,
    cars,
    setcCars,
    pickUpDate,
    returnDate,
    setPickUpDate,
    setRuternDate,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
