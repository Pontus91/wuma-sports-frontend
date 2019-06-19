import userDefaultState from "../user/userDefaultState"
import { ACTION_USER_SUCCESS, USER_REQUEST } from "./userActions";


export function reducer(state = userDefaultState, action) {
  switch (action.type) {
    case ACTION_USER_SUCCESS:
      return { ...state, email: action.email, fetching: false}
    case USER_REQUEST:
      return { ...state, fetching: true}
    default:
      return state;
  }
}