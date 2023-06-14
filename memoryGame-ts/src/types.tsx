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

export interface LevelBtnProps extends LevelBtnWrapperProps {
  children: React.ReactNode;
  onClick: () => void;
}

export interface LevelSectionProps {
  chosenLevel: string;
  setLevel: (level: string) => void;
}
