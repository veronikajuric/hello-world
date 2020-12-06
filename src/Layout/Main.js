import React from 'react';
import Header from '../components/Organisms/Header/Header';
import { GlobalStyle } from '../components/Atoms/GlobalStyle';
import { Space } from '../styles/helpers';

const Main = (props) => {
	const { children } = props;
	return (
		<>
			<GlobalStyle />
			<Header />
			<Space />
			{children}
		</>
	);
};

export default Main;
