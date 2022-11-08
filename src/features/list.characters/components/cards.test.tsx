import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockCharacterTestApi } from '../../../infrastructure/model/mockCharacter';
import { CardsCharacters } from './cards';

describe('Given Cards component', () => {
    test('should be render the name of character', () => {
        render(
            <Router>
                <CardsCharacters item={mockCharacterTestApi}></CardsCharacters>
            </Router>
        );

        const element = screen.getByText('Adjudicator Rick');
        expect(element).toBeInTheDocument();
    });
    describe('Given the CardsCharacters component', () => {
        describe('When we render the CardsCharacters component', () => {
            test('it should have a button', () => {
                render(
                    <Router>
                        <CardsCharacters item={mockCharacterTestApi} />
                    </Router>
                );
                expect(screen.getByRole('button')).toBeInTheDocument();
                userEvent.click(screen.getByRole('button'));
            });
        });
    });
});
