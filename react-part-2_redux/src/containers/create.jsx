'use strict';
import { connect } from 'react-redux';

import Create from '../components/createView';
import {getJobList} from '../actions/users';
import {createUser} from '../actions/users';

const mapStateToProps = (state) => {
	return {
    jobs : state.users.jobs,
    createdUser: state.users.createUser
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    getJobList: () => (dispatch(getJobList())),
    createUser: (name, job) => (dispatch(createUser(name, job)))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Create);
