import { createGlobalStyle } from 'styled-components';
import reset from '../../styles/reset';
import global from '../../styles/global';

export const GlobalStyle = createGlobalStyle`	
	${reset};
	${global};
`;
