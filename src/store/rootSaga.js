import { all } from 'redux-saga/effects'
import { watchUpdateUser } from './User/UserSaga'

/**
 * Generator funktion ska alltid ha * lär dig använda
 */
export function* rootSaga(){
  yield all([
    watchUpdateUser()
  ])
}

