import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { BsWind, BsFillSunFill, BsFillSunsetFill } from "react-icons/bs";

type Props = {};

const TempretureAndDetail = (props: Props) => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy or whatever</p>
      </div>
      <div className="flex items-center justify-between w-full text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="Weather-contion"
          className="w-20"
        />
        <p className="text-5xl">34°</p>
        <div className="flex flex-col items-start space-y-2">
          <div className="relative flex font-light items-center justify-center text-sm">
            <CiTempHigh className="absolute right-full w-6 h-6 mr-0.5" />
            Feel's like:<span className="font-medium ml-1">32°</span>
          </div>
          <div className="relative flex font-light items-center justify-center text-sm">
            <WiHumidity className="absolute right-full w-6 h-6 " />
            Humidity:<span className="font-medium ml-1">65%</span>
          </div>
          <div className="relative flex font-light items-center justify-center text-sm">
            <BsWind className="absolute right-full w-4 h-4 mr-1" />
            Wind:<span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around gap-5 text-white text-sm py-3">
        <div className="flex items-center justify-center gap-1 min-w-max">
          <BsFillSunFill className="w-6 h-6" />
          <p className="font-light">
            Rise :<span className="font-medium ml-1">06:45 AM</span>
          </p>
        </div>
        |
        <div className="flex items-center justify-center gap-1 min-w-max">
          <BsFillSunsetFill className="w-6 h-6" />
          <p className="font-light">
            Set :<span className="font-medium ml-1">06:45 AM</span>
          </p>
        </div>
        |
        <div className="flex items-center justify-center gap-1 min-w-max">
          <AiOutlineArrowUp className="w-6 h-6" />
          <p className="font-light">
            High :<span className="font-medium ml-1">45°</span>
          </p>
        </div>
        |
        <div className="flex items-center justify-center gap-1 min-w-max">
          <AiOutlineArrowDown className="w-6 h-6" />
          <p className="font-light">
            Low :<span className="font-medium ml-1">33°</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TempretureAndDetail;
