import { takeEvery, put } from 'redux-saga/effects'
import { ACTION_UPDATE_TESTONE } from './TestoneActions'
import { doUpdateTestone} from './TestoneActions'

/**
 * MÅSTE ALLTID HA * EFTER FUNCTION HÄR PÅ SAGAN ANNARS FUNGERAR DET INTE
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