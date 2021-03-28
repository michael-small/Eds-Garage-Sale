import React, { Component } from 'react';

export default function Search(props) {
	return (
		<div>
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
