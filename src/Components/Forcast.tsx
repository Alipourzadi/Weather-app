import { iconUrlFromCode } from "@/services/weatherConditionServ";
import { randomUUID } from "crypto";
import WeatherItem from "./WeatherItem";

const Forcast = ({ weather, title }: any) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="grid md:grid-cols-5 grid-cols-4 gap-y-3 text-white">
        {weather.hourly.map((item: any) => {
          return (
            <WeatherItem
              key={crypto.randomUUID()}
              title={item.title}
              icon={item.icon}
              temp={item.temp}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Forcast;
