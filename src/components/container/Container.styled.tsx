import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { SCREEN_LG, SCREEN_XM } from 'constants/breakpoints';
import { COLUMN_WIDTH, GUTTER } from 'constants/spacing';

const base = css`
	position: relative;
	margin-left: auto;
	margin-right: auto;
	box-sizing: border-box;
	width: 100%;
`;

export const FluidContainer = styled.div`
	${base}
`;

export const Container = styled.div`
	${base}
	max-width: ${COLUMN_WIDTH * 4 + GUTTER * 2 * 3}px;

	@media (min-width: ${SCREEN_XM}px) {
		max-width: ${COLUMN_WIDTH * 8 + GUTTER * 2 * 7}px;
	}

	@media (min-width: ${SCREEN_LG}px) {
		max-width: ${COLUMN_WIDTH * 12 + GUTTER * 2 * 11}px;
	}
`;
