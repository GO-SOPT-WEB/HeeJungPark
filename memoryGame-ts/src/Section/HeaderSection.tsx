import { HeaderSectionProps } from "../types";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: rgb(255, 143, 162);
  display: flex;
  height: 250px;
`;

const TitleWrapper = styled.div`
  #title {
  font-size: 50px;
  color: black;
}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
`;

const NumWrapper = styled.div`
  justify-content: space-evenly;
  align-items: center;
  color: white;
  font-size: 30px;
`;


const ResetWrapper = styled.div`
  display: flex;
  margin: 3rem;
  height: 5%
  width: 5%;
  align-items: center;
`;

const ButtonWrapper = styled.button`
  font-size: 25px;
  background-color: white;
  color: rgb(222, 106, 126);
  border: pink;
  border-radius: 30%;
  padding: 30px;
`;



const HeaderSection: React.FC<HeaderSectionProps> = ({chosenLevel, AnswerList, Reset}) => {

  const ResetBtn: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => {
    return <ButtonWrapper {...props}> {children} </ButtonWrapper>;
  };

  return (
    <>
      <HeaderWrapper>
        <TitleWrapper>
          <h1 id="title"> 짱구는 못말려 &#128539; 기억력게임 </h1>
          <NumWrapper>
            {"맞은 개수 : "} {AnswerList.length} /  {""}{chosenLevel === "Easy" ? "5" : chosenLevel === "Normal" ? "7" : "9"}
          </NumWrapper>
        </TitleWrapper>
        <ResetWrapper>
          <ResetBtn onClick={Reset}> RESET! </ResetBtn>
        </ResetWrapper>
      </HeaderWrapper>
    </>
  );
};

export default HeaderSection;