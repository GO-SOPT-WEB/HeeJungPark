import React from "react";
import styled from 'styled-components';
const Header = () => {
    return (
        <HeaderWrapper> 기상 예보  </HeaderWrapper>
    )
}

export default Header;

const HeaderWrapper = styled.header`
    display: flex;
    background-color: rgb(180, 212, 249);
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 30px;
    width: 100%;
    height: 9rem;
    font-size: 3rem;
`