import { 
  takeLatest, 
  call, 
  put 
} from "redux-saga/effects";
import {
  USER_REQUEST,
  GET_USER,
  USER_FAILURE
} from './userActions'
import axios from "axios";

export function* watcherSaga() {
  yield takeLatest(USER_REQUEST, workerSaga)
  console.log('steg1')
}

function* workerSaga(){
  console.log('steg2')
  try {
    const { data: { email }} = yield call(getEmail)
    yield put({ type: GET_USER, email})
  } catch (error) {
    yield put({ type: USER_FAILURE, error})
  }
  console.log('steg3 klart')
}

/**
 * Getting email from backend using axios
 */
const token = localStorage.getItem("token")
const getEmail = () => axios.get("http://localhost:3001/api/users", {
    headers:  { authorization: "bearer " + token }
  });