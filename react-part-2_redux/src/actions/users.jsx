import {INIT, LOADING, DETAIL, JOBS, EDIT, DELETE} from '../constants';
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

export function createUser(name, job) {
    const data = {
        'name': name,
        'job': job 
    };

    return function(dispatch){
        dispatch({
            type: LOADING,
            payload: true
        });
        $.ajax({
            type:'POST',
            url: 'http://45.32.235.206:8000/api/users/',
            data: data
        }).then(function(data){
            dispatch({
                type: EDIT,
                payload:{
                    createdUser: data
                }
            });
            dispatch({
                type: LOADING,
                payload: false
            });
        });
    }
};

export function editUser(id, data) {
    return function(dispatch){
        dispatch({
            type: LOADING,
            payload: true
        });
        $.ajax({
            type: 'PUT',
            data: data,
            url: 'http://45.32.235.206:8000/api/users/' + id
        }).then(function(data){
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
        $.ajax({
            type: 'DELETE',
            url: 'http://45.32.235.206:8000/api/users/'+ id
        }).then(function(data){
            dispatch({
                type: DELETE,
                payload:{
                    deletedUser: data
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

export function getJobList() {
    return function(dispatch) {
        dispatch({type: LOADING, payload: true});
        $.get('http://45.32.235.206:8000/api/jobs').then(function(data) {
            dispatch({
                type: JOBS,
                payload: {
                    jobs: data
                }
            });
            dispatch({type: LOADING, payload: false});
        });
    }
};
