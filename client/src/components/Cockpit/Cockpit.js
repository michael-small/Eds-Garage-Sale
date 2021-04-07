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

const filterComics = (comics, searchQuery) => {
	if (!searchQuery) {
		return comics;
	}

	return comics.filter((comic) => {
		const comicName = comic.name.toLowerCase();
		return (
			comicName.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
		);
	});
};

export default function Cockpit(props) {
	const classes = useStyles();

	const comics = props.comics;
	const [searchQuery, setSearchQuery] = useState('');
	const filteredComics = filterComics(comics, searchQuery);

	return (
		<div className={clsx('App', classes.background)}>
			<h1>Our Unsold Stock</h1>
			<div>
				<h2>Total Items: {props.comics.length}</h2>
			</div>
			<Search search={searchQuery} updateSearch={setSearchQuery} />
			<Listings comics={filteredComics} />{' '}
		</div>
	);
}
