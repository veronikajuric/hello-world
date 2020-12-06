import React from 'react';
import styled from 'styled-components';

import { flex } from './flex-grid';

export const FormWrapper = styled.form`
	${flex};
	padding: 25px;
	background: #fafafa;
	width: auto;
	height: auto;
	//max-width: 500px;
	border-radius: 3px;
	box-shadow: 4px 10px 10px -2px lightgrey;
`;

export const SectionWrapper = styled.div`
	${flex};
	padding: 120px 40px;
	background: ${props => (props.gray ? '#fafafa' : 'white')};
`;

export const HeroContentWrapper = styled.div`
	padding-right: 50px;
	letter-spacing: 2px;
`;

// Specific Wrappers

export const ServiceContentWrapper = styled.div`
	box-sizing: border-box;
	width: 100%;
	max-width: 340px;
	vertical-align: baseline;
	margin-left: 20px;
    margin-top: -5px;
`;

// Image wrappers

export const HeroImageWrapper = styled.div`
	max-width: 50%;
	width: 120%;
	align-self: center;
	
	img {
		width: 100%;
		height: 100%;
	}
`;

export const ImageWrapService = styled.div`
	max-width: 50%;
	img {
		width: 116px;
		height: 100px;
	}
`;

export const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: row;
	box-shadow: 0 5px 15px -5px lightgrey;
	width: 100%;
	position: fixed;
	z-index: 99999;
	padding: 10px 40px;
	background: white;
	justify-content: space-between;
	align-items: center;
`;
