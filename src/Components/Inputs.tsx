import { useState } from "react";
import { HiOutlineSearch, HiOutlineLocationMarker } from "react-icons/hi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Inputs = (props: any) => {
  const [city, setCity] = useState<string>("");

  const searchClickHandler = (e: any) => {
    if (city?.trim().length != 0) {
      props.setQuery({ q: city });
    }
  };

  const userLocationHandler = () => {
    if (navigator.geolocation) {
      toast.info("Fetching user location.", { toastId: "location" });
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        toast.success("User location data fetched", {
          toastId: "location-success",
        });
        props.setQuery({ lat, lon });
      });
    }
  };

  return (
    <div className="flex justify-center w-full gap-10 my-6">
      {/* Search Bar & Location Icon */}
      <div className="flex w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          type="text"
          placeholder="Search..."
          className="md:text-xl text-sm font-light p-2 w-full shadow-xl focus:outline-none capitalize"
          onChange={(e) => setCity(e.target.value)}
        />
        <HiOutlineSearch
          className="w-8 h-8 text-white cursor-pointer hover:scale-110 transition-transform ease-in-out"
          onClick={searchClickHandler}
        />
        <HiOutlineLocationMarker
          className="w-9 h-9 text-white cursor-pointer hover:scale-110 transition-transform ease-out"
          onClick={userLocationHandler}
        />
      </div>
      {/* Farenheit & Celcius Sym */}
      <div className="flex items-center w-1/4 justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light hover:scale-110 transition-transform ease-out"
          onClick={() => props.setUnits("metric")}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light hover:scale-110 transition-transform ease-out"
          onClick={() => props.setUnits("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
