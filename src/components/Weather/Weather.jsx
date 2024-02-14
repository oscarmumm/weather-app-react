import "./Weather.css";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Next24hsForecast from "../Next24hsForecast/Next24hsForecast";

const Weather = ({ currentWeatherData, forecastData }) => {
    return (
        <div className="weather">
            <div className="weather-main">
                <CurrentWeather currentWeatherData={currentWeatherData} />
            </div>
            <div className="weather-details">
                <h4 className="weather-24hs-forecast-title">Próximas 24hs:</h4>
                <Next24hsForecast forecastData={forecastData} />
            </div>
        </div>
    );
};

export default Weather;
