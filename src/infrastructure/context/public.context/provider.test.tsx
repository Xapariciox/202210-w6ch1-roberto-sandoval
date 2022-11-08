import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { mockCharacter } from '../../model/mockCharacter';
import { getApi } from '../../services/apis';
import { CharacterFluxContext } from './context';
import { CharacterContentProvider } from './provider';

jest.mock('../../services/apis');

describe('Given the context', () => {
    describe('when it is used by test component', () => {
        test('should first', async () => {
            (getApi as jest.Mock).mockResolvedValue({
                results: mockCharacter,
            });
            const Template = function () {
                const { characters } = useContext(CharacterFluxContext);
                return (
                    <>
                        <div>
                            {characters.map((item) => (
                                <p key={item.id}>{item.name}</p>
                            ))}
                        </div>
                    </>
                );
            };
            render(
                <CharacterContentProvider>
                    <Template></Template>
                </CharacterContentProvider>
            );

            const element = await screen.findByText(/Rick/i);
            expect(element).toBeInTheDocument();
        });
    });
});
