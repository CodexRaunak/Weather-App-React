import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    humidity: 26,
    temp: 42.84,
    wind: 5,
    weather: "scattered clouds",
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div className="WeatherApp">
      {/* <h2>Weather App</h2> */}
      {/* passing updateInfo function to the child component so it can call updateInfo and change the state of the WeatherApp */}
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
