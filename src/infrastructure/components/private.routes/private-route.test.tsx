import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { PrivateRoute } from './private.route';

jest.mock('@auth0/auth0-react');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: jest.fn(),
}));

describe('Given PrivateRoute component', () => {
    describe('When we render the component and user is authenticated', () => {
        beforeEach(() => {
            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: true,
            });
            render(
                <Router>
                    <PrivateRoute>
                        <p>PrivateRoute</p>
                    </PrivateRoute>
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/PrivateRoute/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('When we render the component and user is not authenticated', () => {
        beforeEach(() => {
            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: false,
            });
            render(
                <Router initialEntries={['home']} initialIndex={1}>
                    <PrivateRoute>
                        <p>PrivateRoute</p>
                    </PrivateRoute>
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.queryByText(/PrivateRoute/i);
            expect(element).toBe(null);
            expect(Navigate).toHaveBeenCalled();
        });
    });
});
