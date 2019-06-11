import { combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';
import { routePaths } from '../vy/index';
import { page } from './pageReducer'

const { reducer: location } = connectRoutes(routePaths)

export default combineReducers({
  location,
  page,
 });