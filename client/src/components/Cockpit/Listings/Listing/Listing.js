import React from 'react';
import Aux from '../../../../hoc/Aux';
import Title from './Title/Title';
import Lightbox from './Lightbox/Lightbox';

export default function Listing(props) {
	return (
		<div key={props.keyVal} className='Comics'>
			<Title item={props.listing.name} />
			<div className='ItemContent'>
				<Aux>
					<p>${props.listing.price}</p>
					<img
						src={props.listing.photo.url}
						style={{ width: '200px' }}
					/>
				</Aux>
			</div>
			{/* <Lightbox
				pic={props.listing.gsx$pic.$t}
				itemTitle={props.listing.gsx$item.$t}
			/> */}
		</div>
	);
}
