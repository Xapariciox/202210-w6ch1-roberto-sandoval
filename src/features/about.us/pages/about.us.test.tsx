import { render, screen } from '@testing-library/react';
import { AboutUs } from './about.us';

describe('Given AboutUs component', () => {
    describe('When i render the component AboutUs then..', () => {
        test('should be in the document the tittle about Us', () => {
            render(<AboutUs></AboutUs>);
            const element = screen.getByText(/alvaro/i);
            expect(element).toBeInTheDocument();
        });
    });
});
