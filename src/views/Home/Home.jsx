import weather_logo from '../../assets/icons/weather.svg'
import './Home.css'
import {motion} from 'framer-motion'

const homeVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

const Home = () => {
  return (
    <motion.div className='home-view-container' variants={homeVariants} initial='hidden' animate='visible'>
        <img className='main-logo' src={weather_logo} alt="" />
        <h1 className='main-title'>The Weather App</h1>
    </motion.div>
  )
}

export default Home