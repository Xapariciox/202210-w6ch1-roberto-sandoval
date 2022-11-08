import { useEffect, useReducer } from 'react';
import { Character } from '../../model/interface';
import { loadCharacterAction } from '../../reducer/public.reducer/action.creator';
import { charactersReduce } from '../../reducer/public.reducer/reducer';

import { getApi } from '../../services/apis';
import { CharacterFluxContext } from './context';

export function CharacterContentProvider({
    children,
}: {
    children: JSX.Element;
}) {
    const initialState: Array<Character> = [];
    const [characters, dispatch] = useReducer(charactersReduce, initialState);

    const handleLoad = (numPage: number) => {
        getApi(numPage).then((data) => {
            dispatch(loadCharacterAction(data.results));
        });
    };

    useEffect(() => {
        handleLoad(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const context = {
        characters,
        handleLoad,
    };

    return (
        <CharacterFluxContext.Provider value={context}>
            {children}
        </CharacterFluxContext.Provider>
    );
}
