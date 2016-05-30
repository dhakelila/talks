'use strict';
import { connect } from 'react-redux';

import Create from '../components/createView';
import {getDetail} from '../actions/users';

const mapStateToProps = (state) => {
	return {
		detail: state.users.detail
	};
};

const mapDispatchToProps = (dispatch) => {

	return {
		create: (id, job) => (dispatch(createUser(id, job)))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Create);
