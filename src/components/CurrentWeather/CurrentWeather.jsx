import "./CurrentWeather.css";
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

import pressure_icon from "../../assets/icons/pressure.svg";
import humidity_icon from "../../assets/icons/humidity.svg";
import wind_icon from "../../assets/icons/wind.svg";
import visibility_icon from "../../assets/icons/visibility.svg";

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

const CurrentWeather = ({ currentWeatherData }) => {
    let iconSrc = iconPaths[currentWeatherData.weather[0].icon];
    return (
        <div className="current-weather">
            <h2 className="current__location">{currentWeatherData.name}</h2>
            <div className="current__main-info">
                <img className="current__icon" src={iconSrc} alt="" />
                <span className="current__temperature">
                    {Math.round(currentWeatherData.main.temp)}°C
                </span>
                <span className="current__feel">
                    S.T.: {Math.round(currentWeatherData.main.feels_like)}°C
                </span>
            </div>
            <div className="current__secondary-info">
                <div className="secondary-tile current__humidity">
                    <span className="secondary-tile__title">Humedad</span>
                    <img
                        className="secondary-icon"
                        src={humidity_icon}
                        alt=""
                    />
                    <span>{currentWeatherData.main.humidity}%</span>
                </div>
                <div className="secondary-tile current__pressure">
                    <span className="secondary-tile__title">Presión</span>
                    <img
                        className="secondary-icon"
                        src={pressure_icon}
                        alt=""
                    />
                    <span>{`${currentWeatherData.main.pressure} Hpa`}</span>
                </div>
                <div className="secondary-tile current__visibility">
                    <span className="secondary-tile__title">Visibilidad</span>
                    <img
                        className="secondary-icon"
                        src={visibility_icon}
                        alt=""
                    />
                    <span>{`${currentWeatherData.visibility / 1000} Km`}</span>
                </div>
                <div className="secondary-tile current__wind-speed">
                    <span className="secondary-tile__title">Viento</span>
                    <img className="secondary-icon" src={wind_icon} alt="" />
                    <span>
                        {`${Math.round(
                            currentWeatherData.wind.speed * 3.6
                        )} Km/h`}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
