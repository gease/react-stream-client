import _ from 'lodash';
import {FETCH_STREAMS, DELETE_STREAM, FETCH_STREAM, UPDATE_STREAM, CREATE_STREAM} from "../actions/types";

export const streamReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAM : case UPDATE_STREAM : case CREATE_STREAM :
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        default: return state;
    }
}
