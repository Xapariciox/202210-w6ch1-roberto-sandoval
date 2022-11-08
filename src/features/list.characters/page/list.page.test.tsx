import { render, screen } from '@testing-library/react';
import ListPage from './list.page';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given List Page', () => {
    test('The main should be render the children', () => {
        render(
            <Router>
                <ListPage></ListPage>
            </Router>
        );

        const element = screen.getByPlaceholderText('test');
        expect(element).toBeInTheDocument();
    });
});
