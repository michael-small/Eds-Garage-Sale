import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Listing from './Listing/Listing';

class Listings extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let filteredComics = this.props.comics.filter((comic) => {
			return (
				comic.gsx$item.$t
					.toLowerCase()
					.indexOf(this.props.search.toLowerCase()) !== -1
			);
		});

		return (
			<Aux>
				{filteredComics.reverse().map((comic, index) => (
					<Listing listing={comic} keyVal={comic.id.$t} key={index} />
				))}
			</Aux>
		);
	}
}

export default Listings;
