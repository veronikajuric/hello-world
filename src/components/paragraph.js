import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
	0%   {height: 0}
	100%  {height: 100%}
`;

const sectionParagraph = css`
  	max-width: 1000px;
  	text-align: center;
  	margin: 40px auto;
`;

const smallParagraph = css`
  	font-size: 18px;
	line-height: 30px;
	margin-bottom: 40px;
 `;

export const Paragraph = styled.p`
	font-size: 24px;
	line-height: 35px;
  	${props => (props.size === 'small' ? smallParagraph : '')};
  	${props => (props.type === 'section' ? sectionParagraph : '')};
`;

export const BulletText = styled.p`
	display: inline;
	text-align: left;
	font-size: 18px;
	justify-self: flex-start;
	align-items: flex-start;
	width: 100%;
	margin-left: 10px;
	font-weight: lighter;
`;

export const NavigationLinkTitle = styled.h3`
	font-size: 16px;
	text-transform: uppercase;
	margin-right: 10px;
	padding: 20px;
  	overflow: hidden;
  	cursor: pointer;
	
	> div {
		display: none;
	}

		&:hover {

    > div {
		
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		justify-items: center;
		overflow: hidden;
		z-index: 1;
		background-color: #7f84ff;
		color: white;
		text-align: left;
		padding: 0 10px;
		margin-top: 20px;
		margin-left: -4.5%;
		text-transform: none;
		cursor: pointer;
		border-radius: 3px;
		width: 290px;
		line-height: 30px;
		animation: ${fadeIn} 150ms ease-in-out;
	
    }
	
	  color: #7f84ff;
  }
`;

export const DropdownItem = styled.h4`
	margin: 20px 5px 10px 10px;
	position: relative;
	display: inline-block;
	
  	:before{
		content: "";
		position: absolute;
		width: 0;
		height: 1px;
		bottom: 0;
		left: 0;
		background-color: #FFF;
		visibility: hidden;
		transition: all 0.3s ease-in-out;
  }
  
  	&:hover:before{
		visibility: visible;
		width: 100%;
	  
  }
`;

