import { all } from 'redux-saga/effects'
import { watchUpdateTestone } from './Test/TestoneSaga'

/**
 * Generator funktion ska alltid ha * lär dig använda
 */
export function* rootSaga(){
  yield all([
    watchUpdateTestone()
  ])
}

