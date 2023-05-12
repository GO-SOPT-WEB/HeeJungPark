import React from "react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import styled from 'styled-components';

const Search = () => {
    
    const [option, setOption] = useState("day");
    const [area, setarea] = useState("");

    const navigate = useNavigate();
    

    return (
        <SearchWrapper>
            <SearchSelectWrapper onChange = {(e) => {setOption(e.target.value);}}>
                <SearchSelectOption value = "day"> 일 </SearchSelectOption>
                <SearchSelectOption value = "week"> 주 </SearchSelectOption>
            </SearchSelectWrapper>
            <SearchInputWrapper onChange = {(e) => {setarea(e.target.value);}}  placeholder = "영어로 도시명 (seoul)"/>
            <SearchButtonWrapper type = "submit" onClick = {()=> navigate(`/${option}/${area}`)}>
                검색
            </SearchButtonWrapper>
        </SearchWrapper>
    );
}

export default Search;

const SearchWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items:
    width: 50rem;
`

const SearchSelectWrapper = styled.select`
    display: flex;
    background-color: pink;
    color: black;
    height: 5rem;
    width: 4rem;
    justify-content: center;
    align-items: center;
    font-family: "HS-Regular";
    font-size: 1rem;
    padding: 0.2rem;
    border-radius: 1rem;
    margin: 1rem;
    border-color: pink;
    border-width: 0.3rem;
`

const SearchSelectOption = styled.option`
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    
`

const SearchInputWrapper = styled.input`
    display: flex;
    bckground-color: pink;
    color: black;
    width: 20rem;
    justify-content: center;
    align-items: center;
    font-family: "HS-Regular";
    font-size: 1.5rem;
    border-radius: 1rem;
    border-color: pink;
    border-width: 0.3rem;
    margin: 1rem;
    text-align: center;
`

const SearchButtonWrapper = styled.button`
    display: flex;
    bckground-color: pink;
    color: black;
    width: 4rem;
    align-items: center;
    justify-content: center;
    font-family: "HS-Regular";
    font-size: 1.5rem;
    border-radius: 1rem;
    border-color: pink;
    border-width: 0.3rem;
    margin: 1rem;
`