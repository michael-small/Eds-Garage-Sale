import React from 'react';
import Listing from './Listing/Listing';
import { gql, useQuery } from '@apollo/client';

// MUI Components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';
import './Listings.css';

const useStyles = makeStyles((theme) => ({
	grid: {
		marginBottom: '8px',
	},
}));

const GET_ANTIQUES = gql`
	query GetAllAntiques {
		products {
			id
			price
			name
			photo {
				url
			}
			shortDescription
			categories {
				name
			}
		}
	}
`;

export default function Listings(props) {
	const classes = useStyles();

	const { loading, error, data } = useQuery(GET_ANTIQUES);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	const filterListings = (listings, searchQuery) => {
		if (!searchQuery) {
			return listings;
		}

		return listings.filter((listing) => {
			const listingName = listing.name.toLowerCase();
			return (
				listingName.toLowerCase().indexOf(searchQuery.toLowerCase()) !==
				-1
			);
		});
	};

	const filteredListings = filterListings(
		data.products.slice(),
		props.listingsQuery
	);

	return (
		<div>
			<Grid
				container
				spacing={4}
				className={clsx('grid-container', classes.grid)}
			>
				{filteredListings.reverse().map((listing, index) => (
					<Grid
						item
						xs={12}
						sm={3}
						md={4}
						lg={3}
						key={index}
						align='center'
					>
						<Listing listing={listing} />
					</Grid>
				))}
			</Grid>
		</div>
	);
}
