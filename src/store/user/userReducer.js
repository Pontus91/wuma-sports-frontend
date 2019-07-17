import userDefaultState from "../user/userDefaultState"
import { 
  GET_USER, 
  USER_REQUEST, 
  USER_FAILURE
} from "./userActions";


export function reducer(state = userDefaultState, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, email: action.email, fetching: false}
    case USER_REQUEST:
      return { ...state, fetching: true}
    case USER_FAILURE:
      return { ...state, failure: true}
    default:
      return state;
  }
}