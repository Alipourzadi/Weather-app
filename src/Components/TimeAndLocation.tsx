import { formatToLocalTime } from "@/services/weatherConditionServ";

const TimeAndLocation = ({ weather }: any) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center my-10">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(weather.dt, weather.timeZone)}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-white text-3xl font-medium my-0">
          {`${weather.name}, ${weather.country}`}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
