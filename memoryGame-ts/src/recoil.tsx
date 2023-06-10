import { atom, selector } from 'recoil';
import { CardType } from './types';

export const levelState = atom({
  key: 'levelState',
  default: 'Easy',
});

export const chosenListState = atom<CardType[]>({
  key: 'chosenListState',
  default: [],
});

export const answerListState = atom<{ pair0: CardType; pair1: CardType }[]>({
  key: 'answerListState',
  default: [],
});