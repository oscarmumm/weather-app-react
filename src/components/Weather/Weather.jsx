import './Weather.css'
import CurrentWeather from '../CurrentWeather/CurrentWeather'

const Weather = ({currentWeatherData}) => {
  return (
    <div className='weather'>
        <CurrentWeather currentWeatherData={currentWeatherData} />
    </div>
  )
}

export default Weather