import React from 'react';
import styled, { css } from 'styled-components';
import { color, space, layout } from 'styled-system';


// Text properties

export const alignText = css`
	${props => (props.alignText && `text-align: ${props.alignText}`)};
`;

export const setFontSize = css`
	${props => (props.fontSize && `font-size: ${props.fontSize}`)};
`;

export const fontWeight = css`
	${props => (props.fontWeight && `font-weight: ${props.fontWeight}`)};
`;

export const setPadding = css`
	
`;

export const setWidth = css`
	${props => (props.setWidth && `width: ${props.setWidth}`)};
`;

export const setHeight = css`
	${props => (props.setHeight && `height: ${props.setHeight}`)};
`;

export const maxWidth = css`
	${props => (props.maxWidth && `max-width: ${props.maxWidth}`)};
`;
export const minWidth = css`
	${props => (props.minWidth && `min-width: ${props.minWidth}`)};
`;

export const paddingAndMargin = css`
	${layout}
	${space}
`;
