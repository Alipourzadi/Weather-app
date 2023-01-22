import { HiOutlineSearch, HiOutlineLocationMarker } from "react-icons/hi";

type Props = {};

const Inputs = (props: Props) => {
  return (
    <div className="flex justify-center w-full my-6">
      {/* Search Bar & Location Icon */}
      <div className="flex w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize"
        />
        <HiOutlineSearch className="w-8 h-8 text-white cursor-pointer" />
        <HiOutlineLocationMarker className="w-9 h-9 text-white cursor-pointer hover:animate-bounce" />
      </div>
      {/* Farenheit & Celcius Sym */}
      <div className="flex items-center w-1/4 justify-center">
        <button name="metric" className="text-xl text-white font-light">
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button name="imperial" className="text-xl text-white font-light">
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
