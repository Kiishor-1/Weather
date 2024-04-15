import { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';


export default function WeatherApp() {
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "22d0ae61aba1b8ed31c1640ccd4aea29";

    const [weatherInfo, setWeatherInfo] = useState({});

    

    let getCityWeather = (cityWeather) => {
        setWeatherInfo(cityWeather)
    }

    useEffect(() => {
        async function getWeather() {
            let city = "New Delhi";
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let reqData = await response.json();
            let result = {
                temp: reqData.main.temp,
                tempMin: reqData.main.temp_min,
                tempMax: reqData.main.temp_max,
                humidity: reqData.main.humidity,
                feelsLike: reqData.main.feels_like,
                weather: reqData.weather[0].description,
                windSpeed: reqData.wind.speed,
                country: reqData.sys.country,
                city:city
            }
            setWeatherInfo(result);
        };
        getWeather();
    }, []);


    return (
        <div className='bg-gradient-to-br from-[#112d4e] to-[#3f72af] h-[100vh] w-[100vw] p-3'>
            <h1 className='text-4xl text-center pt-2 text-white'>Weather App</h1>
            <SearchBox getCityWeather={getCityWeather} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}


// const [weatherInfo, setWeatherInfo] = useState({
    //     temp: 24.09,
    //     tempMin: 23.8,
    //     tempMax: 27,
    //     humidity: 48,
    //     feelsLike: 25.6,
    //     weather: "clear sky",
    //     windSpeed: 2.3,
    //     country: "IN",
    //     city: "Bhilai"
    // });

     // let getWeather = async () => {
    //     let city = "New Delhi";
    //     let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    //     let reqData = await response.json();
    //     let result = {
    //         temp: reqData.main.temp,
    //         tempMin: reqData.main.temp_min,
    //         tempMax: reqData.main.temp_max,
    //         humidity: reqData.main.humidity,
    //         feelsLike: reqData.main.feels_like,
    //         weather: reqData.weather[0].description,
    //         windSpeed: reqData.wind.speed,
    //         country: reqData.sys.country,
    //     }
    //     console.log(result);
    //     return result;
    // };