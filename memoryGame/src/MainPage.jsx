import GameSection from "./Section/GameSection";
import HeaderSection from "./Section/HeaderSection";
import LevelSection from "./Section/LevelSection";
import styled from "styled-components";
import {useState} from "react";

const MainPage = () => {

  const [level, setLevel] = useState("Easy");
  const [ChosenList, setChosenList] = useState([]);
  const [AnswerList, setAnswerList] = useState([]);
  const findingPair = (card) => {
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

const MainPageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightpink};
  height: 100vh;
`;

