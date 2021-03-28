import React from 'react';
import Aux from '../../../../hoc/Aux';
import Title from './Title/Title';
import Lightbox from './Lightbox/Lightbox';

export default function Listing(props) {
	return (
		<div key={props.keyVal} className='Comics'>
			<Title
				item={props.listing.gsx$item.$t}
				currentSearch={props.listing.gsx$currentsearch.$t}
				soldSearch={props.listing.gsx$soldsearch.$t}
			/>
			<div className='ItemContent'>
				<Aux>
					{props.listing.gsx$sold1link.$t !== '' ? (
						<p>
							<span>
								<b>Sold for: </b>
							</span>
							<span>
								<a href={props.listing.gsx$sold1link.$t}>
									${props.listing.gsx$sold1.$t}
								</a>
								{props.listing.gsx$sold2link.$t !== '' && (
									<span>
										<span>, </span>
										<a
											href={
												props.listing.gsx$sold2link.$t
											}
										>
											${props.listing.gsx$sold2.$t}
										</a>
									</span>
								)}
							</span>
						</p>
					) : (
						<p>
							<b>No recorded sale</b>
						</p>
					)}
				</Aux>

				<Aux>
					{props.listing.gsx$current1.$t !== '' ? (
						<p>
							<span>
								<b>Current listing: </b>
							</span>
							<span>
								<a href={props.listing.gsx$current1link.$t}>
									${props.listing.gsx$current1.$t}
								</a>
							</span>
						</p>
					) : (
						<p>
							<b>No current listings</b>
						</p>
					)}
				</Aux>

				<Aux>
					{props.listing.gsx$closetolink.$t !== '' ? (
						<p>
							<span>
								<b>Close to: </b>
							</span>
							<span>
								<a href={props.listing.gsx$closetolink.$t}>
									${props.listing.gsx$closeto.$t}
								</a>
							</span>
						</p>
					) : (
						<p>
							<b>No "other" listing</b>
						</p>
					)}
				</Aux>

				<Aux>
					{props.listing.gsx$notes.$t !== '' ? (
						<p className='Notes'>
							<b>Notes: </b>
							<i>{props.listing.gsx$notes.$t}</i>
						</p>
					) : (
						<p>
							<b>No notes</b>
						</p>
					)}
				</Aux>
			</div>
			<Lightbox
				pic={props.listing.gsx$pic.$t}
				itemTitle={props.listing.gsx$item.$t}
			/>
		</div>
	);
}
