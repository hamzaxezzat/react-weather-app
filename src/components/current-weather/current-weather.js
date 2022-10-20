import "./current-weather.css"

 const CurrentWeather = ()=>{
    return (
        <div className="weather">
            <div className="top">
                <div className="">
                <p className="city">Belga</p>
                <p className="weather-description">Sunny</p>
                </div>
                <img alt="Weather" className="weather-icon" src="icons/01d.png" />
            </div>
            <div className="bottom">
                <p className="temperature">18°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-value">Feels like</span>
                        <span className="parameter-label">22°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-value">Wind</span>
                        <span className="parameter-label">2 m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-value">Humidity</span>
                        <span className="parameter-label">15% </span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-value">Pressure</span>
                        <span className="parameter-label">15 hPa </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;