import styled, { css } from "styled-components";

const LevelWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  height: 100px;
  margin: 20px;
`;

const LevelBtnWrapper = styled.button`
  background-color: ${(props) => props.level === props.chosenLevel ? "rgb(255, 123, 87)" : "rgb(255, 241, 151)"};
  color: ${(props) => (props.level === props.chosenLevel ? "white" : "rgb(252, 168, 98)")};
  border: none;
  border-radius: 25%;
  width: 150px;
  height: 50px;
  margin: 20px;
  font-size: 25px;
`;



const LevelSection = ({chosenLevel, setLevel}) => {

  const LevelBtn = ({children, ...props}) => {
    return <LevelBtnWrapper {...props}>{children}</LevelBtnWrapper>;
  };

  return (
    <LevelWrapper>
      <LevelBtn level={"Easy"} chosenLevel={chosenLevel} onClick={() => {setLevel("Easy");}}> {"Easy"} </LevelBtn>
      <LevelBtn level={"Normal"} chosenLevel={chosenLevel} onClick={() => {setLevel("Normal");}}> {"Normal"} </LevelBtn>
      <LevelBtn level={"Hard"} chosenLevel={chosenLevel} onClick={() => {setLevel("Hard");}}> {"Hard"} </LevelBtn>
    </LevelWrapper>
  );
};

export default LevelSection;

