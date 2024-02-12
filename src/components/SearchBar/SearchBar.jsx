import "./SearchBar.css";
import search_icon from "../../assets/icons/search.svg";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { APIKEY } from "../../keys/apikey";

const SearchBar = ({ fetchWeather }) => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const debounceValue = useDebounce(search, 500);


    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                `https://api.openweathermap.org/geo/1.0/direct?q=${debounceValue}&limit=10&appid=${APIKEY}`
            );
            const data = await response.json();
            console.log("fetching data...");
            setResults(data);
        };
        search ? getData() : setResults([]);
    }, [debounceValue]);

    const clearInput = () => {
        setSearch('')
    }

    const handleClick = (data) => {
        clearInput();
        fetchWeather(data);
    }

    return (
        <div>
            <div className="input-wrapper">
                <img className="search-icon" src={search_icon} alt="" />
                <input
                    className="search-input"
                    type="text"
                    placeholder="Type to search..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
            </div>
            <ul className="results-container">
            {
                results.map((el) => (
                    <li className="result" onClick={() => handleClick(el)}>{`${el.name}, ${el.country}`}</li>
                ))
            }
        </ul>
        </div>
    );
};

export default SearchBar;
