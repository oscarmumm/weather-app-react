import weather_logo from '../../assets/icons/weather.svg'
import './Home.css'

const Home = () => {
  return (
    <div className='home-view-container'>
        <img className='main-logo' src={weather_logo} alt="" />
        <h1 className='main-title'>The Weather App</h1>
    </div>
  )
}

export default Home