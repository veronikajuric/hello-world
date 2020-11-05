import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
	border: none;
	border-radius: 3px;
	cursor: pointer;
	position: relative;
	width: auto;
	text-align: center;
`;
export const PurpleButton = styled(Button)`
	padding: 15px 50px;
	background-color: #7f84ff;
	color: white;
	margin-top: 50px;
	font-size: 24px;
`;

export const GreenButton = styled(Button)`
	background: rgb(31, 165, 154);
	color: white;
	padding: 10px 30px;
	font-size: 18px;
	display: compact; 
	//width: 144px;
	//height: 45px;
`;
