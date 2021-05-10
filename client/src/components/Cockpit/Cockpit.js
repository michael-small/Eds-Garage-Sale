import React, { useState } from 'react';
import Listings from './Listings/Listings';
import '../../App.css';
import Search from '../Search/Search';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	background: {
		backgroundColor: theme.palette.background.main,
	},
}));

export default function Cockpit(props) {
	const classes = useStyles();

	const [searchQuery, setSearchQuery] = useState('');

	return (
		<div className={clsx('App', classes.background)}>
			<h1>Our Unsold Stock</h1>
			{/* TODO: Pass this length up from `Listings FC` */}
			{/* <div>
				<h2>Total Items: {props.listings.length}</h2>
			</div> */}
			<Search search={searchQuery} updateSearch={setSearchQuery} />
			<Listings listingsQuery={searchQuery} />{' '}
		</div>
	);
}
