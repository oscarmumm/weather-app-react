import weather_logo from "../../assets/icons/weather.svg";
import home_bg from '../../assets/img/home-bg.webp'
import "./Home.css";
import {motion} from "framer-motion";

const homeVariants = {
    hidden: {
        opacity: 0,
        y: 150,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const Home = () => {
    return (
        <div className="home-view-container">
            <motion.img initial={{opacity: 0}} animate={{opacity: 1}} className="home-bg" src={home_bg} alt="" />
            <motion.h1
                variants={homeVariants}
                initial="hidden"
                animate="visible"
                className="main-title">
                The Weather App
            </motion.h1>
        </div>
    );
};

export default Home;
