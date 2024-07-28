import React,{useState,useEffect} from 'react'
import './style.css'

const WeatherInfo = ({ tempInfo }) => {

    const [weatherState, setWeatherState] = useState("");
    let[getTime, setTime]=useState();

    const {
        temp,
        humidity,
        pressure,
        name,
        country,
        sunset,
        speed,
        weatherMood
    } = tempInfo;
    
    let sec = sunset;
    let date = new Date(sec * 1000);
    let time = `${date.getHours()}:${date.getMinutes()}`;

    const Set =() => {
        var realTime=new Date().toLocaleString();
        setTime(realTime);
    }

    setInterval(Set,1000);
    
    useEffect(() => {
        if (weatherMood) {
            switch (weatherMood) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherState("wi-fog");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherState("wi-dust");
                    break;

                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weatherMood]);

    return (
        <>
            <div className='widget'>

                <div className='weatherIcon'>
                    <i id="icon" className={`wi ${weatherState}`}></i>
                </div>

                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{temp}&deg;</span>
                    </div>

                    <div className='description'>
                        <div className='weatherCondition'>{weatherMood}</div>
                        <div className='place'>{name} {country}</div>
                    </div>

                    <div className='date'>
                        {getTime}
                    </div>
                </div>

                <div className='info'>

                    <div id="sunset_secton" className='two-sided-section'>
                        <p><i id="sunset" className={"wi wi-sunset"}></i></p>
                        <p className='extra-info-leftside'>Sunset<br />{time} </p>
                    </div>

                    <div className='two-sided-section'>
                        <p><i id="humidity" className={"wi wi-humidity"}></i></p>
                        <p className='extra-info-leftside'>Humidity<br /> {humidity} </p>
                    </div>


                    <div className='two-sided-section'>
                        <p><i id="pressure" className={"wi wi-rain"}></i></p>
                        <p className='extra-info-leftside'>Pressure<br />{pressure} </p>
                    </div>

                    <div id="wind_secton" className='two-sided-section'>
                        <i id="speed" className={"wi wi-strong-wind"}></i>
                        <p className='extra-info-leftside'>Wind<br/>{speed}</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WeatherInfo
