import "./ForecastTile.css";
import _01d from "../../assets/weather-icons/01d.svg";
import _01n from "../../assets/weather-icons/01n.svg";
import _02d from "../../assets/weather-icons/02d.svg";
import _02n from "../../assets/weather-icons/02n.svg";
import _03d from "../../assets/weather-icons/03d.svg";
import _03n from "../../assets/weather-icons/03n.svg";
import _04d from "../../assets/weather-icons/04d.svg";
import _04n from "../../assets/weather-icons/04n.svg";
import _09d from "../../assets/weather-icons/09d.svg";
import _09n from "../../assets/weather-icons/09n.svg";
import _10d from "../../assets/weather-icons/10d.svg";
import _10n from "../../assets/weather-icons/10n.svg";
import _11d from "../../assets/weather-icons/11d.svg";
import _11n from "../../assets/weather-icons/11n.svg";
import _13d from "../../assets/weather-icons/13d.svg";
import _13n from "../../assets/weather-icons/13n.svg";
import _50d from "../../assets/weather-icons/50d.svg";
import _50n from "../../assets/weather-icons/50n.svg";
import {useEffect, useState} from "react";

const iconPaths = {
    "01d": _01d,
    "01n": _01n,
    "02d": _02d,
    "02n": _02n,
    "03d": _03d,
    "03n": _03n,
    "04d": _04d,
    "04n": _04n,
    "09d": _09d,
    "09n": _09n,
    "10d": _10d,
    "10n": _10n,
    "11d": _11d,
    "11n": _11n,
    "13d": _13d,
    "13n": _13n,
    "50d": _50d,
    "50n": _50n,
};

const ForecastTile = ({forecast, currentWeatherData}) => {
    let iconSrc = iconPaths[forecast.weather[0].icon];
    let temperature = Math.round(forecast.main.temp);

    const forecastTime = (timestamp, timezone) => {
        let date = new Date((timestamp + timezone + 10800) * 1000);
        return date.toLocaleTimeString().slice(0, -3);
    };

    return (
        <div className="forecast-tile">
            <img className="forecast-tile__icon" src={iconSrc} alt="" />
            <span className="forecast-tile__temp">{temperature}°C</span>
            <span className="forecast-tile__hs">
                {forecastTime(forecast.dt, currentWeatherData.timezone)}
            </span>
        </div>
    );
};

export default ForecastTile;
