import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherAPP(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bengaluru",
        feelsLike: 28.43,
        humidity: 70,
        temp: 26.74,
        tempMax: 27.14,
        tempMin: 25.62,
        weather: "broken clouds"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Aragonda Harshitha</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}