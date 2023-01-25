import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import {
  BsWind,
  BsFillSunFill,
  BsFillSunsetFill,
  BsSpeedometer2,
} from "react-icons/bs";
import {
  formatToLocalTime,
  iconUrlFromCode,
} from "@/services/weatherConditionServ";

const TempretureAndDetail = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    humidity,
    pressure,
    speed,
    sunrise,
    sunset,
    feels_like,
    timezone,
  },
}: any) => {
  return (
    <div>
      <div className="flex items-center justify-center mt-10 text-xl text-cyan-300 my-0">
        <p>{details}</p>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-around mx-auto gap-3 w-full text-white sm:py-10 ">
        <img
          src={iconUrlFromCode(icon)}
          alt="Weather-condition"
          className="w-24"
        />
        <p className="text-5xl">{`${temp.toFixed()}`}°</p>
        <div className="grid sm:grid-cols-1 grid-cols-2 items-start content-center gap-y-5 gap-x-16 my-4 md:my-0">
          <div className="relative flex font-light items-center justify-center text-sm">
            <CiTempHigh className="absolute right-full w-6 h-6 mr-0.5" />
            Feel's like:
            <span className="font-medium ml-1">
              {`${feels_like.toFixed()}°`}
            </span>
          </div>
          <div className="relative flex font-light items-center justify-center text-sm">
            <WiHumidity className="absolute right-full w-6 h-6 " />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="relative flex font-light items-center justify-center text-sm">
            <BsWind className="absolute right-full w-4 h-4 mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()}km/h`}</span>
          </div>
          <div className="relative flex font-light items-center justify-center text-sm">
            <BsSpeedometer2 className="absolute right-full w-4 h-4 mr-1" />
            Pressure:
            <span className="font-medium ml-1">{`${pressure.toFixed()}km/h`}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 xs:gap-x-20 sm:gap-x-8 gap-y-2 justify-items-center content-center text-white text-sm  my-0">
        <div className="flex items-center justify-start gap-1 w-44 rounded-lg p-5 bg-slate-300 bg-opacity-30 shadow-xl md:bg-inherit md:shadow-none">
          <BsFillSunFill className="w-6 h-6" />
          <p className="font-light">
            Rise :
            <span className="font-medium ml-1">
              {formatToLocalTime(sunrise, timezone, "hh:mm a")}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-start gap-1 w-44 rounded-lg p-5 bg-slate-300 bg-opacity-30 shadow-xl md:bg-inherit md:shadow-none">
          <BsFillSunsetFill className="w-6 h-6" />
          <p className="font-light">
            Set :
            <span className="font-medium ml-1">
              {formatToLocalTime(sunset, timezone, "hh:mm a")}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-start gap-1 w-44 rounded-lg p-5 bg-slate-300 bg-opacity-30 shadow-xl md:bg-inherit md:shadow-none">
          <AiOutlineArrowUp className="w-6 h-6" />
          <p className="font-light">
            High :
            <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
          </p>
        </div>
        <div className="flex items-center justify-start gap-1 w-44 rounded-lg p-5 bg-slate-300 bg-opacity-30 shadow-xl md:bg-inherit md:shadow-none">
          <AiOutlineArrowDown className="w-6 h-6" />
          <p className="font-light">
            Low :
            <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TempretureAndDetail;
