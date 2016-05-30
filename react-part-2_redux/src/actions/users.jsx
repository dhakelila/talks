import {INIT, LOADING, DETAIL} from '../constants';
import $ from 'jquery';

export function init() {
    return function(dispatch){
        dispatch({
            type: LOADING,
            payload: true
        });
        $.get('http://45.32.235.206:8000/api/users').then(function(data){
            dispatch({
                type: INIT,
                payload:{
                    users: data
                }
            });
            dispatch({
                type: LOADING,
                payload: false
            });
        });
    }
};

export function editUser(id) {
    return function(dispatch){
        dispatch({
            type: LOADING,
            payload: true
        });
        $.put('http://45.32.235.206:8000/api/users/' + id).then(function(data){
            dispatch({
                type: EDIT,
                payload:{
                    editedUser: data
                }
            });
            dispatch({
                type: LOADING,
                payload: false
            });
        });
    }
};

export function deleteUser(id) {
    return function(dispatch){
        dispatch({
            type: LOADING,
            payload: true
        });
        $.delete('http://45.32.235.206:8000/api/users/' + id).then(function(data){
            dispatch({
                type: EDIT,
                payload:{
                    editedUser: data
                }
            });
            dispatch({
                type: LOADING,
                payload: false
            });
        });
    }
};

export function getDetail(id) {
    return function(dispatch) {
        dispatch({type: LOADING, payload: true});
        $.get('http://45.32.235.206:8000/api/users/' + id).then(function(data) {
            dispatch({
                type: DETAIL,
                payload: {
                    detail: data
                }
            });
            dispatch({type: LOADING, payload: false});
        });
    }
};
