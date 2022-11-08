import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given footer component', () => {
    describe('When we render the component', () => {
        test('should show the adress', () => {
            render(<Footer></Footer>);

            const element = screen.getByPlaceholderText('Meeseks');
            expect(element).toBeInTheDocument();
        });
    });
});
