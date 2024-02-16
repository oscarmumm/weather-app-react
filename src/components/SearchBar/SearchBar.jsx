import "./SearchBar.css";
import search_icon from "../../assets/icons/search.svg";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { APIKEY } from "../../keys/apikey";
import { motion } from "framer-motion";

const liVariants = {
    hidden: {
        y: -10,
    },
    visible: {
        y: 0,
    },
};

const SearchBar = ({ fetchWeather }) => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const debounceValue = useDebounce(search, 250);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                `https://api.openweathermap.org/geo/1.0/direct?q=${debounceValue}&limit=10&appid=${APIKEY}`
            );
            const data = await response.json();
            // console.log("fetching data...");
            setResults(data);
        };
        search ? getData() : setResults([]);
    }, [debounceValue]);

    const clearInput = () => {
        setSearch("");
    };

    const handleClick = (data) => {
        clearInput();
        fetchWeather(data);
    };

    return (
        <div>
            <div className="input-wrapper">
                <img className="search-icon" src={search_icon} alt="" />
                <input
                    className="search-input"
                    type="text"
                    placeholder="Escribe un lugar..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
            </div>
            <motion.ul initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} className="results-container">
                {results.map((el) => (
                    <motion.li
                    key={el.lat}
                        variants={liVariants}
                        initial="hidden"
                        animate="visible"
                        className="result"
                        onClick={() => handleClick(el)}
                    >{`${el.name}, ${el.country}`}</motion.li>
                ))}
            </motion.ul>
        </div>
    );
};

export default SearchBar;
