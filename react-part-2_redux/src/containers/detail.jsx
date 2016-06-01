'use strict';
import { connect } from 'react-redux';

import Detail from '../components/detailView';
import {getJobList} from '../actions/users';
import {getDetail} from '../actions/users';

const mapStateToProps = (state) => {
	return {
    jobs : state.users.jobs,
		detail: state.users.detail
	};
};

const mapDispatchToProps = (dispatch) => {

	return {
		getDetail: (id) => (dispatch(getDetail(id))),
    getJobList: () => (dispatch(getJobList()))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Detail);
