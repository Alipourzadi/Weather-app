import { iconUrlFromCode } from "@/services/weatherConditionServ";

const WeatherItem = ({ title, icon, temp }: any) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-sm bg-white bg-opacity-25 rounded-sm p-0.5 shadow-sm">
          {title}
        </p>
        <img
          src={iconUrlFromCode(icon)}
          alt="weather-condition"
          className="w-16 my-1"
        />
        <p className="font-medium">{temp.toFixed()}°</p>
      </div>
    </div>
  );
};

export default WeatherItem;
