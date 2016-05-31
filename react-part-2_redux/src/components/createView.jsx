'use strict';

import React from 'react';

class Create extends React.Component {

	componentWillMount(){
		this.props.getJobList();
	}

	handleForm() {
		const name = this.refs.userName.value;
		const jobSelect = this.refs.jobSelect.value;
		this.props.createUser(name, jobSelect);
		this.refs.createUserForm.reset();
	}

	render(){
		console.log('createView', this.props)
		return <div>
				<h2>CREATE NEW USER</h2>
				<form ref="createUserForm" onSubmit={this.handleForm.bind(this)}>
					<input type="User name" ref="userName"/>
					<select name="job" id="" ref="jobSelect">
						{this.props.jobs && this.props.jobs.map((job, i) => 
							<option value={job} key={i}>{job}</option>
						)}
					</select>
					<input type="submit"/>
				</form>
			</div>;
		}
};

export default Create;
