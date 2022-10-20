import "./current-weather.css"

 const CurrentWeather = ({data})=>{
    return (
        <div className="weather">
            <div className="top">
                <div className="">
                <p className="city">{data.city}</p>
                <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="Weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-value">Feels like</span>
                        <span className="parameter-label">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-value">Wind</span>
                        <span className="parameter-label">{Math.round(data.wind.speed)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-value">Humidity</span>
                        <span className="parameter-label">{Math.round(data.main.humidity)}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-value">Pressure</span>
                        <span className="parameter-label">{Math.round(data.main.pressure)} hPa </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;