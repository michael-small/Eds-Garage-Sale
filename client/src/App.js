import React, { Component, useState } from 'react';
import Cockpit from './components/Cockpit/Cockpit';
import Aux from './hoc/Aux';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const GET_ANTIQUES = gql`
	query GetAllAntiques {
		products {
			id
			price
			name
			photo {
				url
			}
		}
	}
`;

export default function App() {
	const updateSearch = (event) => {
		setSearch({ search: event.target.value.substr(0, 20) });
	};

	const { loading, error, data } = useQuery(GET_ANTIQUES);
	const [products, setProducts] = useState(null);
	const [search, setSearch] = useState('');

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<Aux>
			<Cockpit
				comics={data.products}
				search={search}
				updateSearch={updateSearch.bind(this)}
			/>
		</Aux>
	);
}
