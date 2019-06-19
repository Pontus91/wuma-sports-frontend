import userDefaultState from "../user/userDefaultState"
import { ACTION_USER_SUCCESS } from "./userActions";


export function reducer(state = userDefaultState, action) {
  switch (action.type) {
    case ACTION_USER_SUCCESS:
      return { ...state, email: action.email}
    default:
      return state;
  }
}