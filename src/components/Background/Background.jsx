import './Background.css'

const Background = ({backgroundGradient}) => {
  return (
    <div className={`background ${backgroundGradient}`}></div>
  )
}

export default Background