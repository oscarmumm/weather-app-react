import "./Weather.css";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Next24hsForecast from "../Next24hsForecast/Next24hsForecast";
import WindForecast from "../WindForecast/WindForecast";
import temperature_icon from '../../assets/icons/thermometer.svg'

const Weather = ({ currentWeatherData, forecastData }) => {
    return (
        <div className="weather">
            <div className="weather-main">
                <CurrentWeather currentWeatherData={currentWeatherData} />
            </div>
            <div className="weather-details">
                <h4 className="weather-24hs-forecast-title">
                    <span>Próximas 24hs</span>
                </h4>
                <h4 className="weather-24hs-forecast-title">
                    <img className="temperature-icon" src={temperature_icon} alt="" />
                    <span>Temperatura</span>
                </h4>
                <Next24hsForecast forecastData={forecastData} />
                <h4 className="weather-24hs-forecast-title">
                    <span>Viento:</span>
                </h4>
                <WindForecast forecastData={forecastData} />
            </div>
        </div>
    );
};

export default Weather;
