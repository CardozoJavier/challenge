import React, { Component } from 'react';
import axios from 'axios';
import classes from './style.css';
import Users from '../../components/Users';

export default class UsersContainer extends Component{
	constructor(props){
		super(props);
		this.state = {
			allUsers : [],
			filteredUsers : [],
			username : '',
		}
		// Bindeo el this a handleChange para que se ejecute correctamente cuando es llamado por el input del navbar.
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount(){
		// Una vez montado el componente, hago un pedido por todos los users;
		axios.get('localhost:3000/people')
			.then(res => res.data)
			.then(allUsers => {
				this.sortingByName(allUsers);
				this.setState({ allUsers });
			});
	}

	// Ordeno el array de users por orden alfabetico en los nombres.
	sortingByName(users){
		return users.sort((a, b) => {
			let primaryName = a.firstName;
			let secondaryName = b.firstName;
			if(primaryName < secondaryName){  
				return -1;
			}else if(primaryName > secondaryName){
				return 1;
			}else{
				return 0;
			}
		})
	}

	// Manejo el valor del input del navbar. 
	handleChange(e){
		let username = e.target.value;
		this.setState({ username });
		
		// Si el input tiene 3 o mas letras, hago un pedido a la API por usuarios que matcheen en su nombre o apellido con este input.
		if(username.length >= 3){ 
		axios.get(`/people/by-name/${username}`)
			.then(res => res.data)
			.then(filteredUsers => this.setState({ filteredUsers }));
		
		// Sino, muestro todos los usuarios.
		}else{
			this.setState({ filteredUsers : [] });
		}
	}

	render(){
		return(
			<Users 
				handleChange = { this.handleChange } 
				users = { (this.state.filteredUsers.length > 0 && this.state.filteredUsers) || (this.state.allUsers) }
				classes = { classes }
			/>
		)
	}
}
