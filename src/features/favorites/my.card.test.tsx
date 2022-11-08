import { render, screen } from '@testing-library/react';

import { mockCharacterTestApi } from '../../infrastructure/model/mockCharacter';
import userEvent from '@testing-library/user-event';

import { MyCard } from './my.card';

describe('Given Cards component', () => {
    test('should be render the name of character', () => {
        render(<MyCard item={mockCharacterTestApi}></MyCard>);

        const element = screen.getByText('Adjudicator Rick');
        expect(element).toBeInTheDocument();
    });

    describe('Given the MyCard component', () => {
        describe('When we render the MyCard component', () => {
            test('it should have a button', () => {
                render(<MyCard item={mockCharacterTestApi} />);
                expect(screen.getByRole('button')).toBeInTheDocument();
                userEvent.click(screen.getByRole('button'));
            });
        });
    });
});
