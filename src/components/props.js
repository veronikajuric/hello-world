import React from 'react';
import styled, { css } from 'styled-components';

//Text properties

export const alignText = css`
	${props => (props.alignText && `text-align: ${props.alignText}`)};
`;

export const setFontSize = css`
	${props => (props.fontSize && `font-size: ${props.fontSize}`)};
`;

export const fontWeight = css`
	font-weight: ${props => (props.bold ? 'bold' : 'normal')};
	font-weight: ${props => (props.light ? 'lighter' : 'normal')};;
`;

export const setPadding = css`
	
`;
