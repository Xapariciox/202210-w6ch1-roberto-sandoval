import { render, screen } from '@testing-library/react';
import { MyContext } from '../../infrastructure/context/my.context/my.context';
import { mockCharacterTestApi } from '../../infrastructure/model/mockCharacter';
import { Favorites } from './favorites';

describe('Given Cards component', () => {
    test('should be render the name of character', () => {
        const muckContext = {
            myCharacters: [mockCharacterTestApi],
            handleLoad: () => undefined,
            handleAdd: () => undefined,
            handleEraser: () => undefined,
            handleUpdate: () => undefined,
        };
        render(
            <MyContext.Provider value={muckContext}>
                <Favorites></Favorites>
            </MyContext.Provider>
        );

        const element = screen.getByText(mockCharacterTestApi.id);
        expect(element).toBeInTheDocument();
    });
});
