import { forwardRef } from 'react';
import { classNames } from 'utils/classNames';

export type Theme = 'primary' | 'secondary' | 'danger';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Set the theme of the button.
	 *
	 * @default 'primary'
	 */
	theme?: Theme;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ id, className, onClick, theme = 'primary', children, ...rest }, ref) => {
		return (
			<button
				ref={ref}
				id={id}
				className={classNames('button-root', className)}
				onClick={onClick}
				{...rest}
			>
				{children}
			</button>
		);
	},
);

Button.displayName = 'Button';
