import { connectRoutes } from 'redux-first-router'
import { 
  createStore, 
  applyMiddleware, 
  compose
 } from 'redux';
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '../Reducers/rootReducer'
import { routePaths } from '../vy/index'
import { rootSaga } from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()

const {
  middleware: routerMiddleware,
  enhancer: routerEnhancer,
  initialDispatch
} = connectRoutes(routePaths, { initialDispatch: false });

/**
 * Root Store
 */
export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      routerEnhancer,
      composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware))
    )
  );

  sagaMiddleware.run(rootSaga)
  initialDispatch();
  return store;
}
