import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { Character } from '../../model/interface';

import { CharacterFluxContext, initialContext } from './context';

describe('Given the context AppContext', () => {
    let TestComponent: () => JSX.Element;
    describe('When a Test Component is wrapper with this context', () => {
        beforeAll(() => {
            const mockCharacter: Character = {
                id: 1,
                name: 'pepe',
                status: '',
                species: '',
                type: '',
                gender: '',
                image: '',
                episode: [''],
                url: '',
                created: '',
            };

            initialContext.characters = [mockCharacter];
            initialContext.handleLoad(1);
        });
        TestComponent = () => {
            const { characters } = useContext(CharacterFluxContext);
            return <>{characters[0].name}</>;
        };

        test('Then characters should be render from context', () => {
            render(
                <CharacterFluxContext.Provider value={initialContext}>
                    <TestComponent></TestComponent>
                </CharacterFluxContext.Provider>
            );
            const element = screen.getByText(initialContext.characters[0].name);
            expect(element).toBeInTheDocument();
        });
    });
});
