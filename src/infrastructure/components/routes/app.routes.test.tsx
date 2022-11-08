import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';

describe('Given AppRoutes component', () => {
    describe('When we render the component And the route is home', () => {
        beforeEach(() => {
            render(
                <Router
                    initialEntries={[
                        '/',
                        '/Home',
                        '/Favorites',
                        '/Characters',
                        'AboutUs',
                    ]}
                    initialIndex={0}
                >
                    <AppRoutes />
                </Router>
            );
        });
        test('Then it should display the HomePage', () => {
            const element = screen.getByText('Login');
            expect(element).toBeInTheDocument();
        });
        test('Then it should display the Favorites', () => {
            const element = screen.getByText('Login');
            expect(element).toBeInTheDocument();
        });
        test('Then it should display the ListCharacters', () => {
            const element = screen.getByText('Login');
            expect(element).toBeInTheDocument();
        });
        test('Then it should display the about', () => {
            const element = screen.getByText('Login');
            expect(element).toBeInTheDocument();
        });
    });
});
