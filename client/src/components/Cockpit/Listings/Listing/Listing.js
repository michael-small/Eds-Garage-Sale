import React from 'react';
import Aux from '../../../../hoc/Aux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

import PublishPhoto from '../../../../images/publish_photo.jpg';
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
	themeSecondary: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText,
	},
}));

export default function Listing(props) {
	const classes = useStyles();
	return (
		<Card
			className={clsx('card', classes.themeColor)}
			style={{ height: '100%' }}
		>
			{props.listing.photo !== null ? (
				<CardMedia
					className='card-img'
					image={props.listing.photo.url}
				/>
			) : (
				<CardMedia className='card-img' image={PublishPhoto} />
			)}

			<CardContent>
				<Typography variant='h5'>{props.listing.name}</Typography>
				<Typography color='textSecondary' variant='h6'>
					${props.listing.price}
				</Typography>
				{props.listing.shortDescription ? (
					<Typography variant='subtitle1'>
						{props.listing.shortDescription}
					</Typography>
				) : (
					<Aux>
						<br />
						<Typography variant='caption'>
							No description
						</Typography>
					</Aux>
				)}
				<div className={classes.root}>
					{props.listing.categories.map(({ name }, index) => (
						<Chip
							key={index}
							label={name}
							color='primary'
							size='medium'
							className={classes.themeSecondary}
						/>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
