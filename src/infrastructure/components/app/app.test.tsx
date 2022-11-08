import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter as Router } from 'react-router-dom';

describe('given component App', () => {
    test('should show the text', () => {
        render(
            <Router>
                <App></App>
            </Router>
        );

        const element = screen.getByText('Favorites');
        expect(element).toBeInTheDocument();
    });
});
