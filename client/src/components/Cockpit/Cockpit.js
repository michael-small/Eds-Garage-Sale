import React from 'react';
import Listings from './Listings/Listings';
import '../../App.css';
import Search from '../Search/Search';

export default function Cockpit(props) {
	return (
		<div className='App'>
			<h1>Our Unsold Stock</h1>
			<div>
				<h2>Total Items: {props.comics.length}</h2>
			</div>
			{/* <Search search={props.search} updateSearch={props.updateSearch} /> */}
			<Listings comics={props.comics} search={props.search} />{' '}
		</div>
	);
}
