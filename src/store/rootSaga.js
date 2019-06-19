import { all } from 'redux-saga/effects'
import { watcherSaga } from './user/userSaga'

/**
 * Generator funktion ska alltid ha * lär dig använda
 */
export function* rootSaga(){
  yield all([
    watcherSaga()
  ])
}

