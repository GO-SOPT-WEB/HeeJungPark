export interface CardType {
    id?: number;
    name: string;
    img: string;
}
  
export interface CardProps {
    name: string;
    image: string;
    findingPair: (card: CardType) => void;
    ChosenList: CardType[];
    AnswerList: { pair0: CardType; pair1: CardType }[];
    setChosenList: (chosenList: CardType[]) => void;
}

export interface GameSectionProps {
    chosenLevel: string;
    findingPair: (card: CardType) => void;
    ChosenList: CardType[];
    AnswerList: { pair0: CardType; pair1: CardType }[];
    setChosenList: (chosenList: CardType[]) => void;
}

export interface HeaderSectionProps {
    chosenLevel: string;
    AnswerList: { pair0: CardType; pair1: CardType }[];
    Reset: () => void;
}

export interface LevelBtnWrapperProps {
    level: string;
    chosenLevel: string;
  }
  