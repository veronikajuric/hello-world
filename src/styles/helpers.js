import React from 'react';
import styled, { css } from 'styled-components';

const shortDevider = css`
	width: 200px;
	height: 7px;
	margin: 40px 0 60px 0;
`;

const thinDevider = css`
	width: 100%;
	height: 1px;
	opacity: 30%;
	margin-top: 40px;
	margin-bottom: 40px;
`;

export const HorizontalDevider = styled.div`
	background-color: #474646;
	opacity: 20%;
	
	${props => (props.size === 'thin' ? thinDevider : shortDevider)};
`;

export const Space = styled.div`
  	height: ${props => (props.small ? '70px' : '80px')};
`;

export const B = styled.span`
	font-weight: bold;
`;

export const ArrowUp = styled.div`
	//width: 0; 
  	//height: 0; 
  	//border-left: 10px solid transparent;
  	//border-right: 10px solid transparent;
  	//border-bottom: 10px solid mediumpurple;
  	//position: sticky;
	//alignment: center;
	//overflow: visible;
	//top: -10px;
	//left: calc(50% - 5px);
	//background: mediumpurple;

	top: -10px;
	left: calc(50% - 5px);
	position: absolute;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-bottom: 10px solid rgb(127, 132, 255);
`;