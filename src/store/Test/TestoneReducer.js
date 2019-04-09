import initialState from '../initialState'
import { UPDATE_TESTONE } from './TestoneActions'

export default function(state = initialState.testone, action) {
  switch(action.type) {
    case UPDATE_TESTONE:
      return { ...state, testoneEvent: { ...state.testoneEvent, ...action.data }}

    default:
      return state
  }
}