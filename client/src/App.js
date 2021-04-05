import React, { Component, useState } from 'react';
import Cockpit from './components/Cockpit/Cockpit';
import Aux from './hoc/Aux';
import './App.css';
import { gql, useQuery } from '@apollo/client';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const GET_ANTIQUES = gql`
	query GetAllAntiques {
		products {
			id
			price
			name
			photo {
				url
			}
			description
			categories {
				name
			}
		}
	}
`;

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
	const updateSearch = (event) => {
		setSearch({ search: event.target.value.substr(0, 20) });
	};

	const { loading, error, data } = useQuery(GET_ANTIQUES);
	const [search, setSearch] = useState('');

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<Aux>
			<ThemeProvider theme={theme}>
				<Cockpit
					comics={data.products}
					search={search}
					updateSearch={updateSearch.bind(this)}
				/>
			</ThemeProvider>
		</Aux>
	);
}
