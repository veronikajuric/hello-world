import React from 'react';
import styled, { css } from 'styled-components';

const purpleButton = css`
	background-color: #7f84ff;
	font-size: 24px;
	
	&:hover{
		background: rgb(105, 109, 217);
	};
`;

const greenButton = css`
	background: rgb(31, 165, 154);
	font-size: 18px;
	padding: 15px 30px;
	
	&:hover{
		background: rgb(27, 139, 130);
	};
`;

export const Button = styled.button`
	padding: 15px 50px;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	position: relative;
	width: auto;
	text-align: center;
	color: white;
	display: inline-block;
	white-space: nowrap;
	
	${props => (props.color === 'green' ? greenButton : purpleButton)};
	${props => (props.size === 'small' && css`
		padding: 10px 20px;
		font-size: 16px;
		margin-left: 20px;
	`)};
	${props => (props.size === 'smallest' && css`
		padding: 15px 80px;
		font-size: 12px;
		margin: 0 80px;
	`)};
`;
