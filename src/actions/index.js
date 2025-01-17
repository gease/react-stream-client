import {SIGN_OUT, SIGN_IN, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, UPDATE_STREAM} from "./types";
import streams from "../apis/streams";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = (formValues, history) => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await streams.post('streams', {...formValues, userId});
    dispatch({type: CREATE_STREAM, payload: response.data});
    history.push('/');
}

export const deleteStream = (id, history) => async dispatch => {
    await streams.delete(`streams/${id}`);
    dispatch({type: DELETE_STREAM, payload: id});
    history.push('/');
}

export const updateStream = (id, formValues, history) => async dispatch => {
    const response = await streams.patch(`streams/${id}`, formValues);
    dispatch({type: UPDATE_STREAM, payload: response.data});
    history.push('/');
}

export const fetchStream = id => async dispatch => {
    const response = await streams.get(`streams/${id}`);
    dispatch({type: FETCH_STREAM, payload: response.data});
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('streams');
    dispatch({type: FETCH_STREAMS, payload: response.data});
}