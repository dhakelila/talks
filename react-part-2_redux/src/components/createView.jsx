'use strict';

import React from 'react';
import JobSelector from '../containers/jobSelector'

class Create extends React.Component {

	handleForm() {
		const name = this.refs.userName.value;
		const jobSelect = this.refs.jobSelect.value;
		this.props.createUser(name, jobSelect);
		this.refs.createUserForm.reset();
	}

	render(){
		return <div>
				<h2>CREATE NEW USER</h2>
				<form ref="createUserForm" onSubmit={this.handleForm.bind(this)}>
					<input type="User name" ref="userName"/>
					<JobSelector/>
					<input type="submit"/>
				</form>
			</div>;
		}
};

export default Create;
