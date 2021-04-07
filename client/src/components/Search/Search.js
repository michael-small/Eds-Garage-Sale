import React, { useState } from 'react';
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
				onChange={(event) => props.updateSearch(event.target.value)}
			></input>
			<button
				onClick={() => props.updateSearch('')}
				style={{ color: 'red' }}
			>
				X
			</button>
		</div>
	);
}
