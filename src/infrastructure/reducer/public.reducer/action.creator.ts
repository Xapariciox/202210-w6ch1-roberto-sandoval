import { actionType } from './action.types';
import { Character } from '../../model/interface';

export type Action = {
    type: string;
    payload: Array<Character>;
};

export const loadCharacterAction = (characters: Array<Character>): Action => {
    return {
        type: actionType.load,
        payload: characters,
    };
};
