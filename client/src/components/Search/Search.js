import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<span>
					<b>Search by name: </b>
				</span>
				<input
					type='text'
					value={this.search}
					onChange={this.props.updateSearch}
				></input>
				<button
					onClick={() => this.setState({ search: '' })}
					style={{ color: 'red' }}
				>
					X
				</button>
			</div>
		);
	}
}

export default Search;
