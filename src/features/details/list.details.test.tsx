import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockCharacterTestApi } from '../../infrastructure/model/mockCharacter';
import { DetailsList } from './list.details';

describe('Given Details component', () => {
    describe('When i render the component then', () => {
        test('should be in the document the text Volver', () => {
            render(
                <Router>
                    <DetailsList item={mockCharacterTestApi}></DetailsList>
                </Router>
            );
            const element = screen.getByText(/human/i);
            expect(element).toBeInTheDocument();
        });
    });
});
