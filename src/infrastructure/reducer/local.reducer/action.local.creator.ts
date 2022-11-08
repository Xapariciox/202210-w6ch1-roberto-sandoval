import { Character } from '../../model/interface';
import { actionLocalType } from './action.local.types';

export interface LocalAction {
    type: string;
    payload: Array<Character> | Character;
}

export function addCharacterAction(character: Character): LocalAction {
    return {
        type: actionLocalType.add,
        payload: character,
    };
}
export function deleteCharacterAction(character: Character): LocalAction {
    return {
        type: actionLocalType.delete,
        payload: character,
    };
}
export function updateCharacterAction(character: Character): LocalAction {
    return {
        type: actionLocalType.update,
        payload: character,
    };
}
export function localLoadCharacterAction(
    characters: Array<Character>
): LocalAction {
    return {
        type: actionLocalType.load,
        payload: characters,
    };
}
