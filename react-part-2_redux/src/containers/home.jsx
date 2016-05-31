'use strict';
import { connect } from 'react-redux';

import {init} from '../actions/users';
import {editUser} from '../actions/users';
import {deleteUser} from '../actions/users';
import Home from '../components/homeView';


const mapStateToProps = (state) => {
  //Here we pass the state to the component.
	return {
		users : state.users.list
	};
};

const mapDispatchToProps = (dispatch) => {
  //Here we pass to the component the actions from "actions file".
	return {
		init: () => (dispatch(init())),
		deleteUser: (id) => (dispatch(deleteUser(id)))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
