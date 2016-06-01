'use strict';

import React from 'react';

class JobSelector extends React.Component {

	componentWillMount(){
		this.props.getJobList();
	}

	render(){
		return <div>
			<select name="job" id="">
				{this.props.jobs && this.props.jobs.map((job, i) => 
					<option value={job} key={i}>{job}</option>
				)}
			</select>
			</div>
		}
};

export default JobSelector;
