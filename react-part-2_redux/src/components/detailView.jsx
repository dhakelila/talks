'use strict';

import React from 'react';
import {Link} from 'react-router';
import EditionForm from './editionFormView';

class Detail extends React.Component {

	componentWillMount(){
		this.props.getDetail(this.props.params.id);

		//To make it available to the form.
		this.props.handleForm = this.handleForm;
	}

	handleForm() {
		const name = this.refs.userName.value;
		const jobSelect = this.refs.jobSelect.value;
		this.props.editeUser(name, jobSelect);
		this.refs.createUserForm.reset();
	}

	render(){
		return <div>
				   <h4>Current name: {this.props.detail && this.props.detail.name}</h4> 
				   <h4>Current job: {this.props.detail && this.props.detail.job}</h4>
				   <p>Set new values</p> 
				   <EditionForm {...this.props}/>
				</div>
		}
};

export default Detail;
