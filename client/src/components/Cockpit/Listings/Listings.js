import React from 'react';
import Listing from './Listing/Listing';

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

export default function Listings(props) {
	const classes = useStyles();

	const comics = props.comics.slice();

	return (
		<div>
			<Grid
				container
				spacing={4}
				className={clsx('grid-container', classes.grid)}
			>
				{comics.reverse().map((comic, index) => (
					<Grid
						item
						xs={12}
						sm={3}
						md={4}
						lg={3}
						key={index}
						align='center'
					>
						<Listing listing={comic} />
					</Grid>
				))}
			</Grid>
		</div>
	);
}
