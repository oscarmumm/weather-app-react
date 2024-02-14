import ForecastTile from '../ForecastTile/ForecastTile'
import './Next24hsForecast.css'

const Next24hsForecast = ({forecastData}) => {
  return (
    <div className='next-24hs-forecast'>
        {
            forecastData.map((data) => (
                <ForecastTile forecast={data} />
            ))
        }
    </div>
  )
}

export default Next24hsForecast