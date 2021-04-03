import React from 'react';
import './Listings.css';
import Aux from '../../../hoc/Aux';
// import Listing from './Listing/Listing';

// MUI Components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(0.5),
		},
	},
	themeColor: {
		backgroundColor: theme.palette.primary.main,
		padding: '8px',
	},
	themeText: {
		color: theme.palette.primary.contrastText,
	},
	themeSecondary: {
		backgroundColor: theme.palette.secondary.main,
	},
	grid: {
		marginBottom: '8px',
	},
}));

export default function Listings(props) {
	const filteredComics = props.comics.filter((comic) => {
		return (
			comic.name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1
		);
	});

	const classes = useStyles();

	return (
		<div>
			<Grid
				container
				spacing={4}
				className={clsx('grid-container', classes.grid)}
			>
				{filteredComics.reverse().map((comic, index) => (
					<Grid
						item
						xs={12}
						sm={3}
						md={4}
						lg={3}
						key={index}
						align='center'
					>
						<Card
							className={clsx('card', classes.themeColor)}
							style={{ height: '100%' }}
						>
							<CardMedia
								className='card-img'
								image={comic.photo.url}
							/>
							<CardContent>
								<Typography variant='h5'>
									{comic.name}
								</Typography>
								<Typography color='textSecondary' variant='h6'>
									${comic.price}
								</Typography>
								{comic.description ? (
									<Typography variant='subtitle1'>
										{comic.description}
									</Typography>
								) : (
									<Aux>
										<br />
										<Typography variant='caption'>
											No description
										</Typography>
									</Aux>
								)}
								<div key={index} className={classes.root}>
									{comic.categories.map(({ name }, index) => (
										<Chip
											key={index}
											label={name}
											color='primary'
											size='small'
											className={classes.themeSecondary}
										/>
									))}
								</div>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
}
