import car_image1 from "./assets/main-car.png";
import car_image2 from "./assets/tasla.png";
import car_image3 from "./assets/ta.jpg";
import car_image4 from "./assets/taa.png";

export const MenuLinks = [
  { name: "Home", path: "/" },
  { name: "Cars", path: "/cars" },
  { name: "My Booking", path: "/my-bookings" },
];

export const CityList = [
  { name: "Peshawar", value: "peshawar" },
  { name: "Islamabad", value: "islamabad" },
  { name: "Rawalpindi", value: "rawalpindi" },
];

export const DummycarData = [
  {
    _id: "67ff5bc069c03de45f3-b77",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "BMW",
    model: "X5",
    image: car_image1,
    year: 2006,
    category: "SUV",
    seating_capacity: 4,
    fuel_type: "Hybrid",
    transmission: "Semi-Automactic",
    pricePerDay: 300,
    location: "New York",
    desciption:
      "The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.",
    isAvailable: "true",
    createdAdt: "2025-04-16T07:26:56.215Z",
  },
  {
    _id: "68aa6cd179d14ef56g4-c88",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Tesla",
    model: "Model 3",
    image: car_image2,
    year: 2022,
    category: "Sedan",
    seating_capacity: 5,
    fuel_type: "Electric",
    transmission: "Automatic",
    pricePerDay: 400,
    location: "Los Angeles",
    desciption:
      "The Tesla Model 3 is an all-electric sedan offering cutting-edge technology and impressive range. It's perfect for eco-conscious drivers.",
    isAvailable: "true",
    createdAdt: "2025-06-10T10:45:22.123Z",
  },
  {
    _id: "69bb7de280e25gf67h5-d99",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Toyota",
    model: "Camry",
    image: car_image3,
    year: 2019,
    category: "Sedan",
    seating_capacity: 5,
    fuel_type: "Petrol",
    transmission: "Automatic",
    pricePerDay: 150,
    location: "Chicago",
    desciption:
      "Toyota Camry is a reliable and comfortable sedan, ideal for both city and highway driving with excellent fuel efficiency.",
    isAvailable: "true",
    createdAdt: "2025-05-01T14:20:33.455Z",
  },
  {
    _id: "70cc8ef391f36hg78i6-e00",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Ford",
    model: "F-150",
    image: car_image4,
    year: 2021,
    category: "Truck",
    seating_capacity: 5,
    fuel_type: "Diesel",
    transmission: "Manual",
    pricePerDay: 250,
    location: "Houston",
    desciption:
      "The Ford F-150 is a full-size pickup truck known for its strength, durability, and towing capabilities — perfect for heavy-duty jobs.",
    isAvailable: "false",
    createdAdt: "2025-07-20T08:10:11.789Z",
  },
];
