import React from 'react';

export default ({ users, classes, handleChange }) => {
	return (
		<div className= { classes.container }>
			
			<div className= { classes.navbar }>
				<i className="fa fa-search"></i>
				<input onChange= { handleChange } type='text' placeholder='	Search by name...'></input>
			</div>
			{
				(users && users.length > 0) && users.map((user,i) => (
					<div className= { classes.listItems } key= { i }>
						
						<div className= { classes.name }>
							<p>{ user.firstName + ' ' + user.lastName }</p>
						</div>
						
						<div className= { classes.occupation }>
							<p>{ '(' + user.jobTitle + ')' }</p>
						</div>
						
						<div className= { classes.phone }>
							<p>{ user.phoneNumber }</p>
						</div>
						
						<div className={ classes.img }>
							<img src= { user.avatarUrl } alt= 'avatar' />
						</div>
					
					</div>
				))
			}				
		</div>
	)
}