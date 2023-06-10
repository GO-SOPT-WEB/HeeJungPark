import {CardProps, CardType} from "./types"

import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

const CardWrapper = styled.article`

  padding: 40px;

  #card {
    width: 250px;
    height: 300px;
    .active {
      transform: rotateY(180deg);
    }
  }

  .jjanGu {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 400ms;
  }

  #reverse {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 184);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    ::before {
      display: block;
      position: absolute;
      content: " ";
      width: 160px;
      height: 160%;
    }
  }

  #picture {
    display: flex;
    transform: rotateY(180deg);
    color: black;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
  }
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:100%;
}
`;


const Card: React.FC<CardProps> = ({name,  image, findingPair, ChosenList, AnswerList, setChosenList}) => {

  
  const [active, setActive] = useState(false);
  
  useEffect(() => {
    if (ChosenList.length === 2) {
      setTimeout(() => setActive(false), 500);
      setChosenList([]);
    }
  }, [ChosenList]);

    return (
    <CardWrapper onClick={()=> {findingPair({ id: 0, name, img: "" }); setActive(true);}}>
      <article id="card">
        <div className={`jjanGu ${AnswerList.some(jjangGu => jjangGu.pair1.name === name || jjangGu.pair0.name === name) ? "active" : active ? "active" : ""}`}>
          <div id="reverse"> </div>
          <div id="picture">
              <img src={image}/>
          </div>
        </div>
      </article>
    </CardWrapper>
  );
};

export default Card;

