import React from 'react';
import './Search.css';

export default function Search(props) {
	return (
		<div className='body'>
			<span>
				<b>Search by name: </b>
			</span>
			<input
				type='text'
				value={props.search}
				onChange={props.updateSearch}
			></input>
			<button onClick={() => props.updateSearch} style={{ color: 'red' }}>
				X
			</button>
		</div>
	);
}
