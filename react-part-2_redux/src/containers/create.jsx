'use strict';
import { connect } from 'react-redux';

import Create from '../components/createView';
import {createUser} from '../actions/users';

const mapStateToProps = (state) => {
	return {
    createdUser: state.users.createUser
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    createUser: (name, job) => (dispatch(createUser(name, job)))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Create);
