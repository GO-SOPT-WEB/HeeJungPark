import {useParams} from "react-router-dom";
import WeatherCard from "./WeatherCard";
import {useState, useEffect} from "react";
import styled from 'styled-components';

const WeekWeather =() => {
    const params = useParams();
    const {area} = params;
    const [cardList, setCardList] = useState([]);

    useEffect(() => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
          import.meta.env.VITE_APP_WEATHER
        }&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.cod === "200") {
            setCardList(
              data.list.filter((c) => c.dt_txt.includes("00:00:00"))
            );
          }
        })
        .catch((err) => console.log(err));
    }, [area]);
    
    return (
        <>
            <div> week weather </div>
            <WeekWeatherWrapper>
                {(cardList && cardList.map((data, idx) => (
                    <WeatherCard key = {idx} data = {data}/>
                )))}
            </WeekWeatherWrapper>
        </>
    )
}
export default WeekWeather;

const WeekWeatherWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;
`