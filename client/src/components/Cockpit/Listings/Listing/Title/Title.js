import React from 'react';
import './Title.css';

export default function Title(props) {
	return (
		<h4 className='Title'>
			{props.item}
			{props.currentSearch !== '' && (
				<span>
					<a
						href={props.currentSearch}
						style={{ textDecoration: 'none' }}
					>
						{' '}
						🛒
					</a>
				</span>
			)}
			{props.soldSearch !== '' && (
				<span>
					<a
						href={props.soldSearch}
						style={{ textDecoration: 'none' }}
					>
						💰
					</a>
				</span>
			)}
		</h4>
	);
}
