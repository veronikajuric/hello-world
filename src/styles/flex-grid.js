import React from 'react';
import { css } from 'styled-components';

export const flex = css`
	display: flex;
	${props => props.justify && `justify-content: ${props.justify}`};
	${props => props.align && `align-items: ${props.align}`};
	${props => props.direction && `flex-direction: ${props.direction}`};
`;


