import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Home from "./views/Home/Home";
import Background from "./components/Background/Background";
import Weather from "./components/Weather/Weather";
import { APIKEY } from "./keys/apikey";

function App() {
    const [currentWeatherData, setCurrentWeatherData] = useState("");

    const fetchWeather = async (location) => {
      console.log(location)
        console.log(location.lat);
        console.log(location.lon);
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${APIKEY}&units=metric&lang=es`
        );
        const data = await response.json();
        console.log(data);
        console.log(data.main.temp);
        console.log(data.weather[0].icon);
        setCurrentWeatherData(data);
    };

    return (
        <main className="app-container">
            <Background />
            <div className="search-bar-container">
                <SearchBar
                    fetchWeather={fetchWeather}
                />
            </div>
            {currentWeatherData ? (
                <Weather currentWeatherData={currentWeatherData} />
            ) : (
                <Home />
            )}
        </main>
    );
}

export default App;
