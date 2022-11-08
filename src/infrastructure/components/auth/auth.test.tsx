import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import { Auth } from './auth';
import { useAuth0 } from '@auth0/auth0-react';

jest.mock('@auth0/auth0-react');

describe('Given Auth component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: true,
            });
            render(
                <Router>
                    <Auth />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/Logout/i);

            expect(element).toBeInTheDocument();
        });
    });
    describe('When we render the component and click on login button', () => {
        beforeEach(() => {
            (useAuth0 as jest.Mock).mockReturnValue({
                loginWithRedirect: jest.fn(),
            });
            render(
                <Router>
                    <Auth />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/Login/i);
            userEvent.click(element);

            expect(useAuth0().loginWithRedirect).toHaveBeenCalled();
        });
    });
    describe('When we render the component and click on logout button', () => {
        beforeEach(() => {
            (useAuth0 as jest.Mock).mockReturnValue({
                logout: jest.fn(),
                isAuthenticated: true,
            });
            render(
                <Router>
                    <Auth />
                </Router>
            );
        });
        test('Then it should display the result', () => {
            const element = screen.getByText(/logout/i);
            userEvent.click(element);

            expect(useAuth0().logout).toHaveBeenCalled();
        });
    });
});
