import { render, screen } from '@testing-library/react';
import { mockCharacter } from '../../model/mockCharacter';
import { getApi } from '../../services/apis';
import { MyContextProvider } from './my.provider';

jest.mock('../../services/apis');

describe('Given the context', () => {
    describe('when it is used by test component', () => {
        test('should first', async () => {
            (getApi as jest.Mock).mockResolvedValue({
                results: mockCharacter,
            });
            const Template = function () {
                return (
                    <>
                        <div>
                            {mockCharacter.map((item) => (
                                <p key={item.id}>{item.name}</p>
                            ))}
                        </div>
                    </>
                );
            };
            render(
                <MyContextProvider>
                    <Template></Template>
                </MyContextProvider>
            );

            const element = await screen.findByText(/Rick/i);
            expect(element).toBeInTheDocument();
        });
    });
});
