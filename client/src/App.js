import React, { Component } from 'react';
import Cockpit from './components/Cockpit/Cockpit';
import Aux from './hoc/Aux';
import './App.css';

class App extends Component {
	state = {
		comics: [],
		search: '',
	};

	async componentDidMount() {
		//fetch returns promise
		const res = await fetch(
			'https://spreadsheets.google.com/feeds/list/1upupUIm2mZA7XGqRnWYsrGJtvaWiCafqSCBrY6aO8JU/1/public/full?alt=json'
		);
		const json = await res.json();
		const entries = json.feed.entry;
		this.setState({ comics: entries });
	}

	updateSearch(event) {
		this.setState({ search: event.target.value.substr(0, 20) });
	}

	render() {
		return (
			<Aux>
				<Cockpit
					comics={this.state.comics}
					search={this.state.search}
					updateSearch={this.updateSearch.bind(this)}
				/>
			</Aux>
		);
	}
}

export default App;
