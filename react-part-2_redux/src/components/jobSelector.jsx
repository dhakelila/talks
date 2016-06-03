'use strict';

import React from 'react';

class JobSelector extends React.Component {

  componentWillMount(){
    this.props.getJobList();
  }

  render(){
    return <select name="job" id="" ref="jobSelect">
        {this.props.jobs && this.props.jobs.map((job, i) =>
          <option value={job} key={i}>{job}</option>
        )}
      </select>;
  }
};

export default JobSelector;
