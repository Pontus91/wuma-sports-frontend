import { all } from 'redux-saga/effects'
import { watchUpdateUser } from './Test/TestoneSaga'

/**
 * Generator funktion ska alltid ha * lär dig använda
 */
export function* rootSaga(){
  yield all([
    watchUpdateUser()
  ])
}

