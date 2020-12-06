import React from 'react';
import styled from 'styled-components';
import { alignText } from './props';

export const HeroTitle = styled.h1`
	font-size: 48px;
	text-transform: uppercase;
	line-height: 60px;
	${alignText} 
`;

export const Title = styled.h2`
	font-size: 28px;
	alignment: center;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 2px;
	text-align: center;
	margin-bottom: 50px;
`;

export const Subtitle = styled.h3`
	font-size: 24px;
	line-height: 35px;
	font-weight: bold;
	margin-bottom: 10px;
	display: inline-block;
	box-sizing: border-box;
`;

// export default function Hero(props) {
// 	return <Header>{props.headerText}</Header>;
// }
