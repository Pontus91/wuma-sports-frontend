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

const redirectRoute = type => ({type});
const page = (state = 'HOME', action = {}) => components[action.type] || state

export {
  redirectRoute,
  page
}
