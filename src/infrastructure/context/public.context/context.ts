import { createContext } from 'react';
import { Character } from '../../model/interface';

export const initialContext: {
    characters: Array<Character>;
    handleLoad: (numPage: number) => void;
} = {
    characters: [],
    handleLoad: (numPage: number) => undefined,
};
export const CharacterFluxContext = createContext(initialContext);
