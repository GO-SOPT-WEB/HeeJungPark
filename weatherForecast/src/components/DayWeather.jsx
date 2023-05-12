import {useParams} from "react-router-dom";
import WeatherCard from "./WeatherCard";
import {useState, useEffect} from "react";

const DayWeather =() => {

    const params = useParams();
    const {area} = params;
    const [card, setCard] = useState([]);
   
    
    useEffect(() => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
            import.meta.env.VITE_APP_WEATHER
          }&units=metric`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.cod === 200) {
              setCard(data);
            }
          })
          .catch((err) => console.log(err));
    }, [area]);
    
    return (
        <>
            <div> 이건 나와야지</div>
            <div>
                <WeatherCard data = {card}/>
            </div>
        </>
    )
}
export default DayWeather;

