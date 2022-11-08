import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { Character } from '../../model/interface';
import { MyContext, myInitialContext } from './my.context';

describe('given the context', () => {
    let TestComponent: () => JSX.Element;
    describe('When a Test component is wrapper with this context', () => {
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
            myInitialContext.myCharacters = [mockCharacter];
            myInitialContext.handleLoad();
            myInitialContext.handleEraser(mockCharacter);
            myInitialContext.handleUpdate(mockCharacter);
            myInitialContext.handleAdd(mockCharacter);
        });
        TestComponent = () => {
            const { myCharacters } = useContext(MyContext);
            return <>{myCharacters[0].name}</>;
        };

        test('then characters should be render from context', () => {
            render(
                <MyContext.Provider value={myInitialContext}>
                    <TestComponent></TestComponent>
                </MyContext.Provider>
            );
            const element = screen.getByText('pepe');
            expect(element).toBeInTheDocument();
        });
    });
});
