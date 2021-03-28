import React from 'react';
import Aux from '../../../hoc/Aux';
import Listing from './Listing/Listing';

export default function Listings(props) {
	const filteredComics = props.comics.filter((comic) => {
		return (
			comic.gsx$item.$t
				.toLowerCase()
				.indexOf(props.search.toLowerCase()) !== -1
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
