import { NOT_FOUND } from 'redux-first-router'
import {
  HOME,
  MAIN,
} from '../constants'
 
const components = {
  HOME,
  MAIN,
  [NOT_FOUND]: 'NotFound'
}
 
export default (state = 'HOME', action = {}) => components[action.type] || state