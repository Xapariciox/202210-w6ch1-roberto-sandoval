import { Character } from '../../model/interface';
import { actionType } from '../public.reducer/action.types';
import { LocalAction } from './action.local.creator';
import { actionLocalType } from './action.local.types';

export function localReduce(state: Array<Character>, action: LocalAction) {
    let payload: Character;
    switch (action.type) {
        case actionLocalType.add:
            payload = action.payload as Character;
            return [...state, payload];
        case actionLocalType.delete:
            payload = action.payload as Character;
            return state.filter((item) => item.id !== payload.id);
        case actionLocalType.update:
            payload = action.payload as Character;
            return state.map((item) =>
                item.id === payload.id ? payload : item
            );
        case actionType.load:
            return action.payload as Array<Character>;

        default:
            return [...state];
    }
}
