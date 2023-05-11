import React from "react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


const Search = () => {
    
    const [option, setOption] = useState("오늘");
    const [city, setCity] = useState("");

    const navigate = useNavigate();


    return (
        <div>
            <select onChange = {(e) => {setOption(e.target.value);}}>
                <option value = "day"> 일 </option>
                <option value = "week"> 주 </option>
            </select>
            <input onChange = {(e) => {setCity(e.target.value);}}  placeholder = "영어로 도시명 (seoul)"/>
            <button type = "submit" onClick = {()=> navigate(`/${option}/${city}`)}>
                검색
            </button>
        </div>
    );
}

export default Search;

