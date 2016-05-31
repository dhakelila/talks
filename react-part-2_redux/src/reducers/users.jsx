import {INIT, DETAIL, JOBS, DELETE, EDIT} from '../constants';

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
        case DELETE:

            for (var n = 0 ; n < state.list.length ; n++) {
                if (state.list[n].id == action.payload.deletedUser.id) {
                  var removedObject = state.list.splice(n,1);
                  removedObject = null;
                  break;
                }
            }

            return Object.assign({}, state, {deletedUser: action.payload.deletedUser});
        default:
            return state;
    }
};
