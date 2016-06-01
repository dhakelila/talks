'use strict';

import React from 'react';
import {Link} from 'react-router';
import JobSelector from './jobSelectorView';

class Detail extends React.Component {

    componentWillMount(){
        this.props.getDetail(this.props.params.id);
        this.props.getJobList();
    }

    handleForm() {
    	const name = this.refs.userName.value;
    	const jobSelect = this.refs.jobSelect.value;
    	const data = {};

    	if (name) { data.name = name }
    	if (jobSelect) { data.job = jobSelect }
    	//Como se hace el put?
    	//Porque si no mando uno de los dos datos, me sobreescribe. 
    	this.props.editUser(this.props.detail.id, data);
    	this.refs.createUserForm.reset();
    }

    render(){
        console.log('detailView', this.props)
        return <div>
                <Link to={'/'}><h2>Detail</h2></Link>
                {this.props.detail && <div>
                    <h3>Name: {this.props.detail.name}</h3>
                    <h3>job: {this.props.detail.job}</h3>
                </div>}
                <p>Edit values:</p>
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

export default Detail;
