'use strict';

import React from 'react';
import EditionForm from './editionFormView'

class Create extends React.Component {

	componentWillMount(){
		//To make it available to the form.
		// this.props.handleForm = this.handleForm;
	}

	handleForm() {
		const name = this.refs.userName.value;
		const jobSelect = this.refs.jobSelect.value;
		this.props.createUser(name, jobSelect);
		this.refs.createUserForm.reset();
	}

	render(){
		return <div>
				<h2>CREATE NEW USER</h2>
				<EditionForm handleForm={this.handleForm.bind(this)} {...this.props}/>
			</div>;
		}
};

export default Create;
