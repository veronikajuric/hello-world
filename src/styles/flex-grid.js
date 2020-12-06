import React from 'react';
import { css } from 'styled-components';

export const flex = css`
	display: flex;
	${props => props.justify && `justify-content: ${props.justify}`};
	${props => props.align && `align-items: ${props.align}`};
	${props => props.direction && `flex-direction: ${props.direction}`};
`;

export const grid = css`
	display: grid;
	gap: 30px 80px;
	grid-template-columns: 50% calc(50% + 10px);
`;

