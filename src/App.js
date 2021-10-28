import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './Cards.css'
import './index.css'
import './App.css'

class App extends React.Component {

	constructor(){
		super();
		// state is dynamic, can change
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	// we send this function to App's child SearchBox as a prop, and any change in 
	// SearchBox alerts App, which has the information about what the input is in
	// the search bar at present.

	// IMPORTANT
	// we made it an arrow function so that *this* would refer to the App function,
	// not the input function, where the onChange occurs
	onSearchChange = (event) =>	
	{
		let current_input = event.target.value;
		const filtered_robots = [];
		for(let i=0; i<robots.length; i++)
		{
			if(robots[i].name.toLowerCase().includes(current_input.toLowerCase()))
				filtered_robots.push(robots[i]);
		}

		this.setState({searchfield: current_input, robots: filtered_robots});
		console.log(filtered_robots);

	}

	render() {
		return (
			<div className="tc">
				<h1 className="f1"> ROBOFRIENDS </h1>
				<SearchBox searchChange = {this.onSearchChange} />
				<CardList robots={this.state.robots}/>
			</div>
		);
	}
}

export default App;
