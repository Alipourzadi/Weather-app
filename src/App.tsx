import { useEffect, useState } from "react";

import TopButtons from "./Components/TopButtons";
import Inputs from "./Components/Inputs";
import TimeAndLocation from "./Components/TimeAndLocation";
import TempretureAndDetail from "./Components/TempretureAndDetail";
import Forcast from "./Components/Forcast";
import getFormattedWeatherData, {
  formatToLocalTime,
} from "./services/weatherConditionServ";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const localStorageData = localStorage.getItem("weatherData");
  const parsedData = JSON.parse(localStorageData!);

  const [query, setQuery] = useState<any>(
    parsedData ? { q: parsedData.name } : null
  );
  const [units, setUnits] = useState<string>("metric");
  const [weather, setWeather] = useState<any>(parsedData);

  useEffect(() => {
    setWeather(null);
    const fetchWeatherData = async () => {
      if (query) {
        const message = query.q ? query.q : "current location";
        toast.info(`Fetching weather for ${message}`, { toastId: "fetching" });
        await getFormattedWeatherData({ ...query, units: units }).then(
          (data) => {
            toast.success(
              `Successfully fetched weather for ${data.name},${data.country}`,
              {
                toastId: "Success",
              }
            );
            setWeather(data);
            window.localStorage.setItem("weatherData", JSON.stringify(data));
          }
        );
      }
    };

    fetchWeatherData();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-neutral-900 to-sky-300";
    const threshold = units === "metric" ? 20 : 60;
    const sunRiseTime = formatToLocalTime(
      weather.sunrise,
      weather.timezone,
      "hh:mm a"
    );
    const sunSetTime = formatToLocalTime(
      weather.sunset,
      weather.timezone,
      "hh:mm a"
    );
    const currentTime = formatToLocalTime(
      weather.dt,
      weather.timezone,
      "hh:mm a"
    );
    if (weather.temp <= threshold) {
      if (currentTime > sunRiseTime && currentTime < sunSetTime) {
        return "from-yellow-100 to-sky-700";
      } else {
        return "from-neutral-900 to-sky-300";
      }
    } else {
      if (currentTime > sunRiseTime && currentTime < sunSetTime) {
        return "from-amber-500 to-sky-50";
      } else {
        return "from-sky-900 to-gray-500";
      }
    }
  };

  return (
    <>
      <div
        className={`mx-auto max-w-screen-md md:my-1 py-5 px-10 md:px-20 md:py-10 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}
      >
        <div className="min-h-screen">
          <TopButtons setQuery={setQuery} />
          <Inputs setQuery={setQuery} setUnits={setUnits} />
          {weather ? (
            <>
              <TimeAndLocation weather={weather} />
              <TempretureAndDetail weather={weather} />
              <Forcast title="Hourly Forcast" weather={weather} />
            </>
          ) : query ? (
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
              <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-10 w-10"></div>
            </div>
          ) : (
            <h1 className="font-extralight text-2xl text-center mt-20 p-10 text-white">
              Please Enter City Name or Select location Icon to acsess Weather!
            </h1>
          )}
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
