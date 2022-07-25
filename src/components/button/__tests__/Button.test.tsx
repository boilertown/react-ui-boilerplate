import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../index';

describe('Button', () => {
	test('Should render Button correctly', () => {
		render(<Button>Submit</Button>);
		expect(screen.getByRole('button')).toBeInTheDocument();
		expect(screen.getByRole('button')).toHaveTextContent('Submit');
	});

	test('Should be clickable', async () => {
		const user = userEvent.setup();
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>Click me</Button>);
		const button = screen.getByRole('button');
		await user.click(button);
		expect(handleClick).toHaveBeenCalled();
	});

	test('Should not be clickable when disabled', () => {
		const handleClick = jest.fn();
		render(
			<Button onClick={handleClick} disabled>
				Click me
			</Button>,
		);
		userEvent.click(screen.getByRole('button'));
		expect(handleClick).not.toHaveBeenCalled();
	});

	test('Should pass aria-pressed to the inner button', () => {
		render(<Button aria-pressed="true">Action</Button>);
		expect(screen.getByRole('button', { pressed: true })).toBeInTheDocument();
	});
});
