// IMPORT LIBRARIES
import React, { Component } from 'react';

//IMPORT CONTAINERS
import UsersContainer from './containers/UsersContainer/UsersContainer';

export default class App extends Component {
	constructor(props) {
		super(props);        
	}

	render() {
		return (
			<UsersContainer />
		);
	}
}
