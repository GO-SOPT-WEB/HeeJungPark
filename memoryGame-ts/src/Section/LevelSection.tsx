import {LevelBtnWrapperProps} from "../types"
import styled from "styled-components";

interface LevelBtnProps extends LevelBtnWrapperProps {
    children: React.ReactNode;
    onClick: () => void;
}

const LevelWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  height: 100px;
  margin: 20px;
`;

const LevelBtnWrapper  = styled.button<LevelBtnWrapperProps>`
  background-color: ${(props) => props.level === props.chosenLevel ? "rgb(255, 123, 87)" : "rgb(255, 241, 151)"};
  color: ${(props) => (props.level === props.chosenLevel ? "white" : "rgb(252, 168, 98)")};
  border: none;
  border-radius: 25%;
  width: 150px;
  height: 50px;
  margin: 20px;
  font-size: 25px;
`;

const LevelBtn: React.FC<LevelBtnProps> = ({ children, level, chosenLevel, onClick }) => {
    return (
      <LevelBtnWrapper level={level} chosenLevel={chosenLevel} onClick={onClick}>
        {children}
      </LevelBtnWrapper>
    );
};

interface LevelSectionProps {
    chosenLevel: string;
    setLevel: (level: string) => void;
}
  

const LevelSection: React.FC<LevelSectionProps> = ({ chosenLevel, setLevel }) => {
    return (
      <LevelWrapper>
        <LevelBtn level={"Easy"} chosenLevel={chosenLevel} onClick={() => setLevel("Easy")}>
          {"Easy"}
        </LevelBtn>
        <LevelBtn level={"Normal"} chosenLevel={chosenLevel} onClick={() => setLevel("Normal")}>
          {"Normal"}
        </LevelBtn>
        <LevelBtn level={"Hard"} chosenLevel={chosenLevel} onClick={() => setLevel("Hard")}>
          {"Hard"}
        </LevelBtn>
      </LevelWrapper>
    );
};
  
export default LevelSection;

