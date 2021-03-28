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
				<p>
					Items without sold price:{' '}
					{props.comics.filter((x) => x.gsx$sold1.$t === '').length}
				</p>
				<p>
					Items without pic:{' '}
					{props.comics.filter((x) => x.gsx$pic.$t === '').length}
				</p>
			</div>
			<Search search={props.search} updateSearch={props.updateSearch} />
			<Listings comics={props.comics} search={props.search} />{' '}
		</div>
	);
}
