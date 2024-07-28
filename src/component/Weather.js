import React,{useEffect,useState} from 'react'
import WeatherInfo from './WeatherInfo';
import './style.css'

const Weather = () => {

    const [searchValue, setSearchValue] = useState("patna");
    const [tempInfo,setTempinfo]=useState({});

    const getWeatherInfo=async()=>{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d29eb7c6d67c180befce0c7c2d87c01e`;

            let res=await fetch(url);
            let data=await res.json();
            const {temp,humidity,temp_max,temp_min,pressure} = data.main;
            const {name}=data;
            const {country,sunset}=data.sys;
            const {speed} = data.wind;
            const{main:weatherMood}=data.weather[0];

            console.log(data)
            console.log(weatherMood)

            const myNewWeatherInfo = {
                temp,
                humidity,
                temp_max,
                temp_min,
                pressure,
                name,
                country,
                sunset,
                speed,
                weatherMood
            }

            setTempinfo(myNewWeatherInfo);
        }
        catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        getWeatherInfo()
    }, [searchValue])
    return (
        <>
        <div className='wrap'>
               <div id="h1" ><h1>Weather App</h1></div>
               <div>
                    <input 
                        type="search" placeholder='Enter the City Name...'
                        autoFocus id="search"
                        className='searchTeam'
                        value={searchValue}
                        onChange={(e)=>{setSearchValue(e.target.value)}}
                    />
                    <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
                    </div>
        </div>
        <WeatherInfo tempInfo={tempInfo}/>
            
            
        </>
    )
}

export default Weather;
