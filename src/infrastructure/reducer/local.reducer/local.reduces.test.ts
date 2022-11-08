import { Character } from '../../model/interface';
import { mockCharacter, mockCharacterTestApi } from '../../model/mockCharacter';
import {
    addCharacterAction,
    deleteCharacterAction,
    localLoadCharacterAction,
    updateCharacterAction,
} from './action.local.creator';
import { actionLocalType } from './action.local.types';
import { localReduce } from './local.reducer';

describe('when actiontypes is load', () => {
    test('then return payload as new state', () => {
        const result = localReduce(mockCharacter, localLoadCharacterAction([]));
        expect(result).toEqual([]);
    });
    test('Add must return the playload', () => {
        const state: Array<Character> = [];
        const action = { type: '', payload: [] };
        const result = localReduce(state, action);
        expect(result).toEqual([]);
    });
    test('Add must return the playload with the new character', () => {
        const state: Array<Character> = [];
        const result = localReduce(
            state,
            addCharacterAction(mockCharacterTestApi)
        );
        expect(result).toEqual([mockCharacterTestApi]);
    });
    test('Delete must return the playload', () => {
        const state: Array<Character> = [mockCharacterTestApi];
        const result = localReduce(
            state,
            deleteCharacterAction(mockCharacterTestApi)
        );
        expect(result).toEqual([]);
    });
    test('Update must return the playload', () => {
        const state: Array<Character> = [mockCharacterTestApi];
        const result = localReduce(
            state,
            updateCharacterAction(mockCharacterTestApi)
        );
        expect(result).toEqual([mockCharacterTestApi]);
    });
    test('Add', () => {
        const state: Array<Character> = [];
        const action = {
            type: actionLocalType.add,
            payload: mockCharacterTestApi,
        };
        const result = localReduce(state, action);
        expect(result).toEqual(mockCharacter);
    });
    test('Update', () => {
        const state: Array<Character> = [mockCharacterTestApi];
        const action = {
            type: actionLocalType.update,
            payload: mockCharacterTestApi,
        };
        const result = localReduce(state, action);
        expect(result).toEqual([mockCharacterTestApi]);
    });
});
