import {useParams} from "react-router-dom";
import WeatherCard from "./WeatherCard";
import {useState, useEffect} from "react";
import styled from 'styled-components';
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
            
            <DayWeatherWrapper>
                <WeatherCard data = {card}/>
            </DayWeatherWrapper>
        </>
    )
}
export default DayWeather;

const DayWeatherWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;
`