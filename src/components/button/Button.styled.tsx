import styled from '@emotion/styled';
import type { Color, Variant } from './Button';
import { getTheme } from './themes';

export const Button = styled.button<{ $color: Color; variant: Variant }>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	box-sizing: border-box;
	height: auto;
	outline: 0;
	border: 0;
	cursor: pointer;
	padding: 6px 10px;
	font-size: 0.875rem;
	border-radius: 4px;
	${(props) => getTheme(props.$color, props.variant)}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.2;
	}
`;
