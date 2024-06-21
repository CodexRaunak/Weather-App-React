import "./SearchBox.css";
import Button from "@mui/material/Button";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        humidity: jsonResponse.main.humidity,
        wind: jsonResponse.wind.speed,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);

      return result;
    } catch (err) {
      throw err; //error thrown at where this function was called that is handleSubmit fucntion
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };
  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo(); //await beacause return from async functions will will also be asynchronous
      updateInfo(newInfo);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          id="city"
          name="city"
          placeholder="Search"
          value={city}
          onChange={handleChange}
          required
        />
        <button className="btn-search" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        {error ? <p style={{ color: "red" }}>Sorry! Place Not Found.</p> : null}
        {/* <h1>
          {weatherInfo.temp}&deg;<sup style={{ fontSize: "20px" }}>C </sup>
          <LightModeOutlinedIcon />
        </h1>
        <TextField
          variant="standard"
          id="city"
          value={city}
          onChange={handleChange}
          required
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error ? <p style={{ color: "red" }}>Sorry! Place Not Found.</p> : null} */}
      </form>
      <div className="img-container">
        <img src="/cloud.png" className="cloud" alt="cloud" />
        <img src="/sun.png" className="sun" alt="sun" />
      </div>
    </div>
  );
}
