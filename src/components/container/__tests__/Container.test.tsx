import { render, screen } from '@testing-library/react';
import { Container } from '../index';

describe('Container', () => {
	test('Should render Container correctly', () => {
		render(<Container data-testid="basic-container" />);
		expect(screen.getByTestId('basic-container')).toBeInTheDocument();
	});

	test('Should render child element as a descendant', () => {
		render(
			<Container data-testid="container-with-child">
				<div>Content</div>
			</Container>,
		);
		expect(screen.getByTestId('container-with-child')).toHaveTextContent(
			'Content',
		);
	});

	test('Should have some certain classes within `class` attribute', () => {
		render(
			<Container
				data-testid="custom-container"
				className="custom-class developer-class"
			/>,
		);
		expect(screen.getByTestId('custom-container')).toHaveClass('custom-class');
		expect(screen.getByTestId('custom-container')).toHaveClass(
			'developer-class',
		);
	});
});
