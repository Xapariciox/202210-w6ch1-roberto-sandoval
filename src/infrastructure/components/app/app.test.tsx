import { render, screen } from '@testing-library/react';
import { App } from './app';

describe('Given App component', () => {
    describe('When we render the component', () => {
        render(<App />);

        test('Then it should display the title', () => {
            const title = new RegExp('hola', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
