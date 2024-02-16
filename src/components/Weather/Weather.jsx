import "./Weather.css";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Next24hsForecast from "../Next24hsForecast/Next24hsForecast";
import WindForecast from "../WindForecast/WindForecast";
import temperature_icon from "../../assets/icons/thermometer.svg";
import wind_icon from "../../assets/icons/wind.svg";
import {motion} from 'framer-motion'

const Weather = ({currentWeatherData, forecastData}) => {
    return (
        <div className="weather">
            <div className="weather-main">
                <CurrentWeather currentWeatherData={currentWeatherData} />
            </div>
            <motion.div className="weather-details" initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0, transition: {duration: 2, type: 'spring', stiffness: 150}}}>
                <h4 className="weather-24hs-forecast-title">
                    <span className="weather-24hs-forecast-title__main">
                        Próximas 24hs
                    </span>
                </h4>
                <h4 className="weather-24hs-forecast-title">
                    <img
                        className="temperature-icon"
                        src={temperature_icon}
                        alt=""
                    />
                    <span>Temperatura</span>
                </h4>
                <Next24hsForecast forecastData={forecastData} currentWeatherData={currentWeatherData} />
                <h4 className="weather-24hs-forecast-title wind-title">
                    <img className="wind-icon" src={wind_icon} alt="" />
                    <span>Viento</span>
                </h4>
                <WindForecast
                    forecastData={forecastData}
                    currentWeatherData={currentWeatherData}
                />
            </motion.div>
        </div>
    );
};

export default Weather;
