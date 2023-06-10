import {CardType, GameSectionProps} from "../types"

import Card from "../Card";
import styled from "styled-components";
import {useMemo} from "react";

import {levelState, chosenListState,answerListState } from '../recoil';
import { useRecoilState } from "recoil";

const jjangGu_LIST: CardType[] = [
  {id: 1, name: "맹구", img: "src/assets/맹구.PNG",},
  {id: 2, name: "부리부리", img: "src/assets/부리부리.PNG",},
  {id: 3, name: "와니야마", img: "src/assets/와니야마.PNG",},
  {id: 4, name: "유리", img: "src/assets/유리.PNG",},
  {id: 5, name: "짱구", img: "src/assets/짱구.PNG",},
  {id: 6, name: "짱아", img: "src/assets/짱아.PNG", },  
  {id: 7, name: "철수", img: "src/assets/철수.PNG",},
  {id: 8, name: "훈이", img: "src/assets/훈이.PNG",},
  {id: 9, name: "흰둥이", img: "src/assets/흰둥이.PNG",}]



const GameSection : React.FC<GameSectionProps> = ({findingPair}) => {
  const [level, setLevel] = useRecoilState(levelState);
  const [chosenList, setChosenList] = useRecoilState(chosenListState);
  const [answerList, setAnswerList] = useRecoilState(answerListState);

  /* 1 .카드 랜덤하게 섞기 */

  // 배열을 랜덤으로 섞는 함수
  function shuffle(array: CardType[]) {
    let currentIndex = array.length
    let randomIndex = undefined;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  const GameRandomCard = useMemo(() => {
    let selectedCards: CardType[] = [];
    if (level ==='Easy') {
      selectedCards = shuffle(jjangGu_LIST).slice(0, 5).flatMap((card) => [card, card]);
      selectedCards = shuffle(selectedCards);
    } else if (level === 'Normal') {
      selectedCards = shuffle(jjangGu_LIST).slice(0, 7).flatMap((card) => [card, card]);
      selectedCards = shuffle(selectedCards);
    } else if (level === 'Hard') {
      selectedCards = shuffle(jjangGu_LIST).slice(0, 9).flatMap((card) => [card, card]);
      selectedCards = shuffle(selectedCards);
    }
    return selectedCards
  }, [level]);

  // 2. 반환
  return (
    <GameWrapper>
      {GameRandomCard.map((card, i) => (
        <Card
          key={i}
          name={card.name}
          image={card.img}
          findingPair={findingPair}
        />
      ))}
    </GameWrapper>
  );
};

export default GameSection;
  
const GameWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
