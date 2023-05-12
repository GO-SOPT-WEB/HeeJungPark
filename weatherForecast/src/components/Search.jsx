import React from "react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


const Search = () => {
    
    const [option, setOption] = useState("day");
    const [area, setarea] = useState("");

    const navigate = useNavigate();
    

    return (
        <div>
            <select onChange = {(e) => {setOption(e.target.value);}}>
                <option value = "day"> 일 </option>
                <option value = "week"> 주 </option>
            </select>
            <input onChange = {(e) => {setarea(e.target.value);}}  placeholder = "영어로 도시명 (seoul)"/>
            <button type = "submit" onClick = {()=> navigate(`/${option}/${area}`)}>
                검색
            </button>
        </div>
    );
}

export default Search;

