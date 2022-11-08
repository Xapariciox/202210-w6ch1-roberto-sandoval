import { renderHook, waitFor } from '@testing-library/react';
import { Character } from '../model/interface';
import { mockCharacter } from '../model/mockCharacter';
import * as apiCalls from '../services/localapi/local.api';
import { useCrud } from './use.crud';

jest.mock('../services/localapi/local.api');

const newMockTest: Character = {
    id: 1,
    image: '',
    created: '',
    episode: [''],
    gender: '',
    name: 'pepe',
    species: '',
    status: '',
    type: '',
    url: '',
};
const mokckTest: Character = {
    id: 1,
    image: '',
    created: '',
    episode: [''],
    gender: '',
    name: 'ernesto',
    species: '',
    status: '',
    type: '',
    url: '',
};

describe('Given', () => {
    let result: {
        current: {
            myCharacters: Array<Character>;
            handleAdd: (newCharacter: Character) => void;
            handleEraser: (character: Character) => void;
            handleUpdate: (modifiedCharacter: Character) => void;
        };
    };

    beforeEach(() => {
        (apiCalls.createCharacter as jest.Mock).mockResolvedValue(newMockTest);
        (apiCalls.getMyApi as jest.Mock).mockResolvedValue([mokckTest]);
        (apiCalls.updateCharacter as jest.Mock).mockResolvedValue(newMockTest);
        (apiCalls.deleteCharacters as jest.Mock).mockResolvedValue({
            mockCharacter,
        });
        ({ result } = renderHook(() => useCrud()));
    });

    test('Then should return "newMockCharacter"', async () => {
        await waitFor(() => {
            //
            expect(result.current.myCharacters).toEqual([mokckTest]);
        });
    });

    test('When we use the handleAdd, then it should return "newMockTest" object and been called', async () => {
        await waitFor(() => {
            result.current.handleAdd(newMockTest);
            expect(result.current.myCharacters.at(-1)).toEqual(newMockTest);
        });
        await waitFor(() => {
            expect(apiCalls.createCharacter).toHaveBeenCalled();
        });
    });

    test('When we use handleUpdate then it should return "newMockTest" object update and been called', async () => {
        await waitFor(() => {
            result.current.handleUpdate(newMockTest);
            expect(result.current.myCharacters.at(-1)).toEqual(newMockTest);
        });
        await waitFor(() => {
            expect(apiCalls.updateCharacter).toHaveBeenCalled();
        });
    });

    test('When we use handleEraser and the response is ok then it should return the same object and been called', async () => {
        await waitFor(() => {
            result.current.handleEraser(mokckTest);
            expect(result.current.myCharacters.at(-1)).toEqual(mokckTest);
        });
        await waitFor(() => {
            expect(apiCalls.deleteCharacters).toHaveBeenCalled();
        });
    });

    test('When we use handleEraser and the response is not ok', async () => {
        (apiCalls.deleteCharacters as jest.Mock).mockResolvedValue({
            ok: true,
        });
        await waitFor(() => {
            result.current.handleEraser(mokckTest);
            expect(apiCalls.deleteCharacters).toHaveBeenCalled();
        });
    });
});
