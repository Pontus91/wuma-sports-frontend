import initialState from '../initialState'
import {
   API_CALL_REQUEST, 
   API_CALL_SUCCESS,
   API_CALL_FAILURE,

  } from './userInfoActions';

export default function (state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };

    case API_CALL_SUCCESS:
      return { ...state, fetching: false, user: action.user};

    case API_CALL_FAILURE:
      return { ...state, fetching: false, user: null, error: action.error}

    default:
      return state;
  }
}