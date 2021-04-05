import React from 'react';
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
	return (
		<div className={clsx('App', classes.background)}>
			<h1>Our Unsold Stock</h1>
			<div>
				<h2>Total Items: {props.comics.length}</h2>
			</div>
			{/* <Search search={props.search} updateSearch={props.updateSearch} /> */}
			<Listings comics={props.comics} search={props.search} />{' '}
		</div>
	);
}
