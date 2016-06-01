'use strict';
import { connect } from 'react-redux';

import Detail from '../components/detailView';
import {getDetail} from '../actions/users';
import {getJobList} from '../actions/users';
import {editUser} from '../actions/users';

const mapStateToProps = (state) => {
	return {
    jobs : state.users.jobs,
		detail: state.users.detail
	};
};

const mapDispatchToProps = (dispatch) => {

	return {
		getJobList: () => (dispatch(getJobList())),
    getDetail: (id) => (dispatch(getDetail(id))),
    editUser: (id, data) => (dispatch(editUser(id, data)))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Detail);
