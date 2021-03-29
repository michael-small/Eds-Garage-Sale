import React from 'react';
import Title from './Title/Title';
import Lightbox from './Lightbox/Lightbox';

export default function Listing(props) {
	return (
		<div key={props.keyVal} className='Comics'>
			<Title item={props.listing.name} />
			<div className='ItemContent'>
				<p>${props.listing.price}</p>
			</div>
			<div>
				<img
					className='ItemPicture'
					src={props.listing.photo.url}
					style={({ width: '200px' }, { height: '300px' })}
				/>
			</div>
			{/* <Lightbox
				pic={props.listing.gsx$pic.$t}
				itemTitle={props.listing.gsx$item.$t}
			/> */}
		</div>
	);
}
