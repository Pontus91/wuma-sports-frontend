import { combineReducers } from 'redux';
import TestoneReducer from '../store/Test/TestoneReducer';
import { connectRoutes } from 'redux-first-router';
import { routePaths } from '../vy/index';

const { reducer: location } = connectRoutes(routePaths)

export default combineReducers({
  location,
  testone: TestoneReducer
 });