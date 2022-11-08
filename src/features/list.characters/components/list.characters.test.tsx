import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { CharacterFluxContext } from '../../../infrastructure/context/public.context/context';
import { mockCharacterTestApi } from '../../../infrastructure/model/mockCharacter';

import { ListCharacters } from './list.characters';

describe('Given Cards component', () => {
    test('should be render the name of character', () => {
        const muckContext = {
            characters: [mockCharacterTestApi],
            handleLoad: () => undefined,
            handleLoadPagination: (numPage: number) => undefined,
        };
        render(
            <>
                <Router>
                    <CharacterFluxContext.Provider value={muckContext}>
                        <ListCharacters></ListCharacters>
                    </CharacterFluxContext.Provider>
                </Router>
            </>
        );

        const element = screen.getByText(mockCharacterTestApi.id);
        expect(element).toBeInTheDocument();
    });
});
