import React from 'react';
import Cockpit from './components/Cockpit/Cockpit';
import Aux from './hoc/Aux';
import './App.css';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#fdffff',
			main: '#caebf2',
			dark: '#99b9bf',
			contrastText: 'rgba(0, 0, 0, 0.9)',
		},
		secondary: {
			light: '#ff746a',
			main: '#ff3b3f',
			dark: '#bdbdbd',
			contrastText: '#fff',
		},
		background: {
			light: '#ffffff',
			main: '#efefef',
			dark: '#c40017',
			contrastText: 'rgba(0, 0, 0, 0.9)',
		},
	},
});

export default function App() {
	return (
		<Aux>
			<ThemeProvider theme={theme}>
				<Cockpit />
			</ThemeProvider>
		</Aux>
	);
}
