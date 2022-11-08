import { render, screen } from '@testing-library/react';
import { PaginationButtons } from './pagination';

describe('Given Pagination component', () => {
    describe('When we render the Pagination component', () => {
        test('it should have a text...', () => {
            render(<PaginationButtons />);
            const element = screen.getByText(/Next/i);
            expect(element).toBeInTheDocument();
        });
    });
});
