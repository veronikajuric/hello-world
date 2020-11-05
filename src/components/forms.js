import React from 'react';
import styled, { css } from 'styled-components';



export const InputField = styled.input`
	padding: 11px 15px;
	margin-bottom: 20px;
	width: 450px;
	box-sizing: border-box;
	border: 1px solid lightgray;
	border-radius: 3px;
	font-size: 16px;

	//
	//&:required{
	//	border-color: red;
	//}

	
	&:focus{
		border-color: rgb(127, 132, 255);
	}
	
	&::placeholder{
		color: darkgrey;
		opacity: 80%;
	}
`;

export const TextField = styled.textarea`
	padding: 11px 15px;
	margin-bottom: 10px;
	max-width: 450px;
	box-sizing: border-box;
	border: 1px solid lightgray;
	border-radius: 3px;
	height: 150px;
	font-size: 16px;
	resize: none;
	
	&:focus{
		border-color: rgb(127, 132, 255);
	}

	&::placeholder{
		color: darkgrey;
		opacity: 80%;
	}
`;

const formText = css`
	font-size: 16px;
	margin-bottom: 20px;
	color: rgb(53, 57, 68);
	${props => props.opacity && `opacity: ${props.opacity}`};
	${props => props.cursor && `cursor: ${props.cursor}`};
	
`;

export const FormText = styled.p`
	${formText}
`;

// export const FormLinks = sty
//
