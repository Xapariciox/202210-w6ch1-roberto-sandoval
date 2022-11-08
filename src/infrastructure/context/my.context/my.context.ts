import { createContext } from 'react';
import { Character } from './../../model/interface';

export const myInitialContext: {
    myCharacters: Array<Character>;
    handleLoad: () => void;
    handleAdd: (newCharacter: Character) => void;
    handleEraser: (character: Character) => void;
    handleUpdate: (modifiedCharacter: Character) => void;
} = {
    myCharacters: [],
    handleLoad: () => undefined,
    handleAdd: () => undefined,
    handleEraser: () => undefined,
    handleUpdate: () => undefined,
};

export const MyContext = createContext(myInitialContext);
