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

export default function Listings(props) {
	const filteredComics = props.comics.filter((comic) => {
		return (
			comic.name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1
		);
	});
	return (
		<div>
			<Grid container spacing={4} className='grid-container'>
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
						<Card className='card' style={{ height: '100%' }}>
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
								{comic.categories.map(({ name }, index) => (
									<div key={index}>
										<p>{name}</p>
									</div>
								))}
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
}
