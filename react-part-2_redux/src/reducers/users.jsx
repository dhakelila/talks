import {INIT, DETAIL, JOBS} from '../constants';

const initialState = {
  list: null
};


export default function(state = initialState, action) {

    switch (action.type) {
        case INIT:
            return Object.assign({}, state, {list: action.payload.users});
        case DETAIL:
            return Object.assign({}, state, {detail: action.payload.detail});
        case JOBS:
            return Object.assign({}, state, {jobs: action.payload.jobs});
        default:
            return state;
    }
};
