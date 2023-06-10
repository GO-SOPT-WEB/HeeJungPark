export interface CardType {
    id?: number;
    name: string;
    img: string;
}
  
export interface CardProps {
    name: string;
    image: string;
    findingPair: (card: CardType) => void;
}

export interface GameSectionProps {
    findingPair: (card: CardType) => void;
}

export interface HeaderSectionProps {
    Reset: () => void;
}

export interface LevelBtnWrapperProps {
    level: string;
    chosenLevel: string;
  }
  