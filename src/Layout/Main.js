import React from 'react';
import Header from '../components/header';

import { GlobalStyle } from '../components/Atoms/GlobalStyle';
import { Space } from '../components/helpers'

const Main = (props) => {
	const { children } = props;
	return (
		<>
			<GlobalStyle />
			<Header />
			<Space/>
			{children}
			{/* <Header links={navLinks.headerLinks} /> */}
			{/* <BaseWrapper> */}
			{/*	{children} */}
			{/* </BaseWrapper> */}
			{/* <Footer links={navLinks.footerLinks} /> */}
		</>
	);
};

export default Main;
