import "./current-weather.css"

 const CurrentWeather = ()=>{
    return (
        <div className="weather">
            <div className="top">
                <p className="city">Belga</p>
                <p className="weather-description">Sunny</p>
            </div>
            <img alt="Weather" className="weather-icon" src=" " />
            <div className="bottom"></div>
        </div>
    );
}

export default CurrentWeather;