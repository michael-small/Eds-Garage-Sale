import React from 'react';
import Aux from '../../../hoc/Aux';
import Listing from './Listing/Listing';

export default function Listings(props) {
	const filteredComics = props.comics.filter((comic) => {
		return (
			comic.name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1
		);
	});

	return (
		<Aux>
			{filteredComics.reverse().map((comic, index) => (
				<Listing listing={comic} keyVal={comic.index} key={index} />
			))}
		</Aux>
	);
}
