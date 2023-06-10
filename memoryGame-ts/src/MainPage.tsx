import {CardType} from "./types"
import GameSection from "./Section/GameSection";
import HeaderSection from "./Section/HeaderSection";
import LevelSection from "./Section/LevelSection";
import styled from "styled-components";
import {levelState, chosenListState,answerListState } from './recoil';
import { useRecoilState, useResetRecoilState } from "recoil";

const MainPageWrapper = styled.div`
  background-color: pink;
  height: 100vh;
`;


const MainPage = () => {

  const [level, setLevel] = useRecoilState(levelState);
  const [chosenList, setChosenList] = useRecoilState(chosenListState);
  const [answerList, setAnswerList] = useRecoilState(answerListState);
  const resetChosenList = useResetRecoilState(chosenListState);
  const resetAnswerList = useResetRecoilState(answerListState);
  
  const findingPair = (card: CardType) => {
    setChosenList((prevChosenList) => prevChosenList.concat(card));

    if (chosenList.length === 1 && chosenList[0].name === card.name) {
      setAnswerList((prevAnswerList) =>
        prevAnswerList.concat({ pair0: chosenList[0], pair1: card })
      );
    }
  };
  
  const reset = () => {
    resetChosenList();
    resetAnswerList();
  };
  return (
    <>
      <MainPageWrapper>
        <HeaderSection Reset={reset} />
        <LevelSection chosenLevel={level} setLevel={setLevel} />
        <GameSection
          findingPair={findingPair}
        />
      </MainPageWrapper>
    </>
  );
};

export default MainPage;
