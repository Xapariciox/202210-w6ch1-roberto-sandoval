import { Character } from '../../model/interface';
import { actionType } from './action.types';
import { Action } from './action.creator';

export function charactersReduce(state: Array<Character>, action: Action) {
    if (action.type === actionType.load) {
        return action.payload;
    }
    return [...state];
}
