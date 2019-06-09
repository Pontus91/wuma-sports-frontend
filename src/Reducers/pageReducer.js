import { NOT_FOUND } from 'redux-first-router'
import {
  HOME,
  MAIN,
  LOGIN
} from '../constants'
 
const components = {
  HOME,
  MAIN,
  LOGIN,
  [NOT_FOUND]: 'NotFound'
}
 
export default (state = 'HOME', action = {}) => components[action.type] || state
