import React, { useState } from 'react';
import './Search.css';
import TextField from '@material-ui/core/TextField';

import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	resetSearch: {
		marginTop: '8px',
	},
	searchLabel: {
		color: theme.palette.secondary.main,
	},
}));

const CssTextField = withStyles((theme) => ({
	root: {
		'& label.Mui-focused': {
			color: 'black',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'black',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'red',
			},
			'&:hover fieldset': {
				borderColor: 'yellow',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'black',
			},
		},
	},
}))(TextField);

export default function Search(props) {
	const classes = useStyles();

	return (
		<div className='body'>
			<CssTextField
				id='input-with-icon-textfield'
				label='Search by item name'
				type='text'
				placeholder='tv'
				InputProps={{
					endAdornment: (
						<InputAdornment position='end'>
							<SearchIcon />
						</InputAdornment>
					),
				}}
				value={props.search}
				onChange={(event) => props.updateSearch(event.target.value)}
			/>
			<br />
			<Button
				className={classes.resetSearch}
				variant='contained'
				color='secondary'
				size='small'
			>
				<CloseIcon onClick={() => props.updateSearch('')} />
			</Button>{' '}
		</div>
	);
}
