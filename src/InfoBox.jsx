import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import "./InfoBox.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="InfoBox">
      {info.temp < 15 ? (
        <img className="move-cloud" src="/cloud-move.png" /> >
        <img className="move-cloud-2" src="/move-cloud-2.png" />
      ) : info.humidity > 80 ? (
        <img className="move-cloud" src="/cloud-move.png" /> >
        <img className="move-cloud-2" src="/move-cloud-2.png" />
      ) : (
        <>
          {/* <img src="/snowy.png" className="move-snow" /> */}
          <img className="move-cloud" src="/cloud-move.png" />
          <img className="move-cloud-2" src="/move-cloud-2.png" />
        </>
      )}

      <div className="card-container">
        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardContent sx={{ color: "white" }}>
            <Typography
              sx={{ color: "white" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              <p className="city">
                {capitalizeFirstLetter(info.city)}&nbsp;
                {info.humidity > 80 ? (
                  <ThunderstormIcon fontSize="small" />
                ) : info.temp > 15 ? (
                  <WbSunnyIcon fontSize="small" />
                ) : (
                  <AcUnitIcon fontSize="small" />
                )}{" "}
              </p>
              <div className="info temp">{info.temp}&deg;</div>
              <div className="info">
                {" "}
                <q>{capitalizeFirstLetter(info.weather)}</q>
              </div>
              <div className="grid-container">
                <div className="info">
                  <i className="fa-solid fa-wind"></i>
                </div>
                <div className="info">Wind</div>
                <div className="info">|</div>
                <div className="info">{info.wind} m/s</div>
                <div className="info">
                  <i className="fa-solid fa-water"></i>
                </div>
                <div className="info">Humidity</div>
                <div className="info">|</div>
                <div className="info">{info.humidity}%</div>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
