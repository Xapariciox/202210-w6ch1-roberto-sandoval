import { useReducer, useEffect, useCallback } from 'react';
import { Character } from '../model/interface';
import * as actions from '../reducer/local.reducer/action.local.creator';
import { localReduce } from '../reducer/local.reducer/local.reducer';

import {
    createCharacter,
    deleteCharacters,
    getMyApi,
    updateCharacter,
} from '../services/localapi/local.api';

export function useCrud() {
    const initialState: Array<Character> = [];
    const [myCharacters, dispatch] = useReducer(localReduce, initialState);

    const handleLoad = useCallback(() => {
        getMyApi()
            .then((data) => {
                dispatch(actions.localLoadCharacterAction(data));
            })
            .catch((error) => console.log('ERROR'));
    }, []);
    const handleAdd = (newCharacter: Character) => {
        createCharacter(newCharacter).then((character) => {
            dispatch(actions.addCharacterAction(character));
        });
    };
    const handleEraser = (character: Character) => {
        deleteCharacters(character.id).then((response) => {
            if (response.ok) {
                dispatch(actions.deleteCharacterAction(character));
            }
        });
    };
    const handleUpdate = (modifiedCharacter: Character) => {
        updateCharacter(modifiedCharacter.id, modifiedCharacter).then(
            (character) => {
                dispatch(actions.updateCharacterAction(character));
            }
        );
    };

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return {
        myCharacters,
        handleLoad,
        handleAdd,
        handleEraser,
        handleUpdate,
    };
}
