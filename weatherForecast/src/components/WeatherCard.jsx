import { WEATHER_TYPE } from "../constants/weatherType";

const WeatherCard = (props) => {

    const { data } = props;

    const dt_txt = data.dt_txt;
    const temp = data.main.temp;
    const feels_like = data.main.feels_like;
    const temp_max = data.main.temp_max;
    const temp_min = data.main.temp_min;
    const clouds = data.clouds.all;

    return (
        <div>
            <div> {dt_txt} </div>
            <div> 온도 {temp} </div>
            <div> 체감 온도 {feels_like}</div>
            <div> 최저 온도 {temp_min} </div>
            <div> 최고 온도 {temp_max} </div>
            <div> 구름 {clouds} </div>
        </div>
    )

}

export default WeatherCard;