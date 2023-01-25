import { DateTime } from "luxon";
import { CleandWeatherData, WeatherData } from "@/shared/types";

const API_KEY_WEATHER = "9c2c27ee90057e167e9d0fc3833e658a";
const API_KEY_TIMEZONE = "5c1ab67f45b0452aac8d9eb197bc53c7";

const URL_BASE = "http://api.openweathermap.org/data/2.5";

async function getWeatherData(infoType: string, searchParams: any) {
  const url = new URL(URL_BASE + "/" + infoType);
  const urlParams = new URLSearchParams({
    ...searchParams,
    appid: API_KEY_WEATHER,
  });
  url.search = String(urlParams);

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
}

const formatCurrentWeather = (data: WeatherData) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    pressure,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

async function getTimezone(lat: number, lon: number) {
  const data = await fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=${API_KEY_TIMEZONE}`
  )
    .then((resp) => resp.json())
    .then((result) => result.results[0].timezone);
  return data.name;
}

async function formatForcastWeather(data: any) {
  let { list: hourly, city } = data;
  const { lat, lon } = city.coord;
  const timeZone = await getTimezone(lat, lon);
  hourly = hourly.slice(1, 11).map((hour: any) => {
    return {
      title: formatToLocalTime(hour.dt, timeZone, "hh:mm a"),
      temp: hour.main.temp,
      icon: hour.weather[0].icon,
    };
  });

  return { hourly, timeZone };
}

const getFormattedWeatherData = async (
  searchParams: any
): Promise<CleandWeatherData> => {
  const formattedCurrentWeather = await getWeatherData("weather", {
    ...searchParams,
  }).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForcastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.unit,
  }).then(formatForcastWeather);

  return { ...formattedCurrentWeather, ...formattedForcastWeather };
};

const formatToLocalTime = (
  secs: number,
  zone: string,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

function iconUrlFromCode(code: string) {
  return `http://openweathermap.org/img/wn/${code}@2x.png`;
}

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
