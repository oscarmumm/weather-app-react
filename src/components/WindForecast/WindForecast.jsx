import "./WindForecast.css";
import { windDirection } from "../../helpers/WindDirection/WindDirection";

const WindForecast = ({ forecastData }) => {
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
        <span className='wind-forecast-tile__hs'>{el.dt_txt.slice(10, 16)}</span>

                </li>
            ))}
        </ul>
    );
};

export default WindForecast;
