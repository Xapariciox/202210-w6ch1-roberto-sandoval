import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given Headeer component', () => {
    describe('When i render the component then', () => {
        test('should be in the document the alt Rick and Morty', () => {
            render(
                <Router>
                    <Header></Header>
                </Router>
            );
            const element = screen.getByPlaceholderText(/Rick/i);
            expect(element).toBeInTheDocument();
        });
    });
});
