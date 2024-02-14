import ForecastTile from '../ForecastTile/ForecastTile'
import './Next24hsForecast.css'

const Next24hsForecast = ({forecastData}) => {
  return (
    <div>
        {
            forecastData.map((data) => (
                <ForecastTile forecast={data} />
            ))
        }
    </div>
  )
}

export default Next24hsForecast