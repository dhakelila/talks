'use strict';
import { connect } from 'react-redux';

import {getJobList} from '../actions/users';

//We import the view to be conected with it container;
import JobSelector from '../components/jobSelector';

const mapStateToProps = (state) => {
	return {
    jobs : state.users.jobs
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    getJobList: () => (dispatch(getJobList()))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(JobSelector);
