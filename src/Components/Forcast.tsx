import React from "react";

type Props = {
  title: string;
};

const Forcast = ({ title }: Props) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">Hourly Forcast</p>
      </div>
      <hr className="my-2" />
      <div className="flex items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather-condition"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather-condition"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather-condition"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather-condition"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather-condition"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
      </div>
    </div>
  );
};

export default Forcast;
