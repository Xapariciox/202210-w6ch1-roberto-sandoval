import { render, screen } from '@testing-library/react';
import { Details } from './details';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given Details component', () => {
    describe('When i render the component then', () => {
        test('should be in the document the text Volver', () => {
            render(
                <Router>
                    <Details></Details>
                </Router>
            );
            const element = screen.getByText(/volver/i);
            expect(element).toBeInTheDocument();
        });
    });
});
