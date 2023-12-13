import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
    test('render title', () => {
        render(<Text title="title test" text="text test" />);
        expect(screen.getByText('title test')).toBeInTheDocument();
    });
    test('render text', () => {
        render(<Text text="text test" />);
        expect(screen.getByText('text test')).toBeInTheDocument();
    });
});
