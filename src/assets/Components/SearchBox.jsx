import { Button } from "@mui/material"
import TextField from '@mui/material/TextField';
import { useState } from "react";

export default function SearchBox({ getCityWeather }) {
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "22d0ae61aba1b8ed31c1640ccd4aea29";

    const [error, setError] = useState(false);

    let Weather = async () => {
        try {
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
                city: city
            }
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }

    const [city, setCity] = useState("");
    let handleCitySearch = (e) => {
        setCity(e.target.value);
    };

    let handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setCity("");
            let newCityWeather = await Weather();
            getCityWeather(newCityWeather);
        } catch (err) {
            setError(true);
        }
    }


    return (
        <div className="text-center ">
            <form onSubmit={handleSubmit} className="text-4xl font-medium text-white mt-20 mb-4">
                <div className="flex justify-center items-center gap-44">
                    <Button type="button" variant="contained">Your Weather</Button>
                    <TextField size="small" name="city" id="outlined-basic" value={city} onChange={handleCitySearch} label="City Name" variant="outlined" required />
                </div>
                <Button type="submit" size="small" variant="outlined">Search</Button>
            </form>
            {error && <p className="p-2 text-red-700">No such place exists</p>}
        </div>
    )
}
