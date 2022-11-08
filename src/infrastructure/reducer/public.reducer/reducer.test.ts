import { Character } from '../../model/interface';
import { mockCharacter } from '../../model/mockCharacter';
import { loadCharacterAction } from './action.creator';
import { charactersReduce } from './reducer';

describe('when actiontypes is load', () => {
    test('then return payload as new state', () => {
        const result = charactersReduce(
            mockCharacter,
            loadCharacterAction(mockCharacter)
        );
        expect(result).toEqual(mockCharacter);
    });
    test('then return default', () => {
        const state: Array<Character> = [];
        const result = charactersReduce(state, {
            type: '',
            payload: mockCharacter,
        });
        expect(result).toEqual([]);
    });
});
