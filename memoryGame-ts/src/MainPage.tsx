import {CardType} from "./types"
import GameSection from "./Section/GameSection";
import HeaderSection from "./Section/HeaderSection";
import LevelSection from "./Section/LevelSection";
import styled from "styled-components";
import {useState} from "react";

const MainPageWrapper = styled.div`
  background-color: pink;
  height: 100vh;
`;


const MainPage = () => {

  const [level, setLevel] = useState<string>("Easy");
  const [ChosenList, setChosenList] = useState<CardType[]>([]);
  const [AnswerList, setAnswerList] = useState<{ pair0: CardType; pair1: CardType }[]>([]);
  const findingPair = (card: CardType) => {
    setChosenList(ChosenList.concat(card))
    if ((ChosenList.length === 1) && (ChosenList[0].name === card.name)){
      setAnswerList(AnswerList.concat({pair0: ChosenList[0], pair1: card}));
    }
  };
  const Reset = () => {
    setChosenList([]);
    setAnswerList([]);
  }
  return (
    <>
      <MainPageWrapper>
        <HeaderSection
          chosenLevel={level}
          AnswerList={AnswerList}
          Reset={Reset}
        />
        <LevelSection
          chosenLevel={level}
          setLevel={setLevel}
        />
        <GameSection
          chosenLevel={level}
          findingPair={findingPair}
          setChosenList={setChosenList}
          ChosenList = {ChosenList}
          AnswerList = {AnswerList}
        />
      </MainPageWrapper>
    </>
  );
};

export default MainPage;

