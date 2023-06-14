import { WEATHER_TYPE } from "../constants/weatherType";
import styled from 'styled-components';

const WeatherCard = (props) => {
    const { data } = props;
  
    const {
      dt_txt,
      main: { temp, feels_like, temp_max, temp_min } = {},
      clouds: { all: clouds } = {},
      weather: [{ description } = {}] = [],
    } = data || {};
  
    const img = WEATHER_TYPE.find((t) => t.description === description)?.imgURL || "";
  
    return (
      <WeatherCardWrapper>
        <img src={img} />
        <div> {dt_txt} </div>
        <div> 온도 {temp} </div>
        <div> 체감 온도 {feels_like} </div>
        <div> 최저 온도 {temp_min} </div>
        <div> 최고 온도 {temp_max} </div>
        <div> 구름 {clouds} </div>
      </WeatherCardWrapper>
    );
  };
  

export default WeatherCard;

const WeatherCardWrapper = styled.div`
    display: flex;
    margin: 1rem;
    padding: 2.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: pink;
    gap: 0.5rem;
    border-radius: 2rem;
    font-size: 1.3rem;
`