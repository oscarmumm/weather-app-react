import {useState} from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Home from "./views/Home/Home";
import Background from "./components/Background/Background";
import Weather from "./components/Weather/Weather";
import {APIKEY} from "./keys/apikey";
import Next24hsForecast from "./components/Next24hsForecast/Next24hsForecast";

const bgSelector = {
    "01d": "day-light-bg",
    "02d": "day-light-bg",
    "03d": "day-dark-bg",
    "04d": "day-dark-bg",
    "09d": "day-dark-bg",
    "10d": "day-dark-bg",
    "11d": "day-dark-bg",
    "13d": "day-dark-bg",
    "50d": "day-dark-bg",
    "01n": "night-light-bg",
    "02n": "night-light-bg",
    "03n": "night-dark-bg",
    "04n": "night-dark-bg",
    "09n": "night-dark-bg",
    "10n": "night-dark-bg",
    "11n": "night-dark-bg",
    "13n": "night-dark-bg",
    "50n": "night-dark-bg",
};

function App() {
    const [currentWeatherData, setCurrentWeatherData] = useState("");
    const [backgroundGradient, setBackgroundGradient] = useState(
        bgSelector["01d"]
    );

    const [forecastData, setForecastData] = useState([])

    const fetchCurrentWeather = async (location) => {
        console.log("fetching current weather data...");
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${APIKEY}&units=metric&lang=es`
        );
        const data = await response.json();
        console.log('current weather data:', data)
        setBackgroundGradient(bgSelector[data.weather[0].icon]);
        setCurrentWeatherData(data);
    };

    const fetchForecast = async (location) => {
        console.log("fetching forecast...");
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${APIKEY}&units=metric&lang=es`
        );
        const data = await response.json();
        console.log("forecast data:", data);
        console.log("forecast 24hs data:", data.list);
        let temp = data.list;
        setForecastData(temp.slice(0, 8))
    };

    const fetchWeather = (location) => {
        fetchCurrentWeather(location);
        fetchForecast(location);
    };

    return (
        <main className="app-container">
            <Background backgroundGradient={backgroundGradient} />
            <div className="search-bar-container">
                <SearchBar fetchWeather={fetchWeather} />
            </div>
            {currentWeatherData ? (
                <div>
                    <Weather currentWeatherData={currentWeatherData} />
                    <Next24hsForecast forecastData={forecastData} />
                </div>
            ) : (
                <Home />
            )}
        </main>
    );
}

export default App;
