import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Layout } from './layout';

describe('Given Layout component', () => {
    test('the children should print the parragraph', () => {
        render(
            <Router>
                <Layout>
                    <p>prueba test</p>
                </Layout>
            </Router>
        );

        const element = screen.getByText('prueba test');
        expect(element).toBeInTheDocument();
    });
});
