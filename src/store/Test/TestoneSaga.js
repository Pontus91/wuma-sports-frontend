import { takeEvery, put } from 'redux-saga/effects'
import { ACTION_UPDATE_TESTONE } from './TestoneActions'
import { doUpdateTestone} from './TestoneActions'

/**
 *  Funktionerna nedan måste ha * efter sig då det är generator functions. 
 *  Generator functions deklarerar man med function* (){};
 */

export function* watchUpdateTestone(){

  yield takeEvery(
    ACTION_UPDATE_TESTONE,
    makeUpdateTestone
  )
}

function* makeUpdateTestone(action){
  yield put(doUpdateTestone(action.data))
}