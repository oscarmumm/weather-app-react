import "./WindForecast.css";
import {windDirection} from "../../helpers/WindDirection/WindDirection";

const WindForecast = ({forecastData, currentWeatherData}) => {
    const forecastTime = (timestamp, timezone) => {
        let date = new Date((timestamp + timezone + 10800) * 1000);
        return date.toLocaleTimeString().slice(0, -3);
    };

    return (
        <ul className="wind-forecast">
            {forecastData.map((el) => (
                <li className="wind-forecast__tile">
                    <span className="wind-forecast__tile__deg">
                        {windDirection(el.wind.deg)}
                    </span>
                    <span className="wind-forecast__tile__speed">
                        {`${Math.round(el.wind.speed * 3.6)} km/h`}
                    </span>
                    <span className="wind-forecast-tile__hs">
                        {forecastTime(
                            el.dt,
                            currentWeatherData.timezone
                        )}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default WindForecast;
