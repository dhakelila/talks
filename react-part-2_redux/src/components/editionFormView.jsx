'use strict';

import React from 'react';
import JobSelector from './jobSelectorView'

class EditionForm extends React.Component {

	render(){
		return <div>
				<form ref="createUserForm" onSubmit={this.handleForm.bind(this)}>
					<input type="User name" ref="userName"/>
					<JobSelector {...this.props}/>
					<input type="submit"/>
				</form>
			</div>;
		}
};

export default EditionForm;
