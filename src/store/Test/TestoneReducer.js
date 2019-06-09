import initialState from '../initialState'
import { UPDATE_USER } from './TestoneActions'

export default function(state = initialState.user, action) {
  switch(action.type) {
    case UPDATE_USER:
      return { ...state, userInformation: { ...state.userInformation, ...action.data }}

    default:
      return state
  }
}