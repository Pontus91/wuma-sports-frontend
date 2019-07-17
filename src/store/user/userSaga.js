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

const token = localStorage.getItem("token")

export function* watcherSaga() {
  yield takeLatest(USER_REQUEST, workerSaga)
}

function* workerSaga(){
  try {
    const { data: { email }} = yield call(getEmail)
    yield put({ type: GET_USER, email})
  } catch (error) {
    yield put({ USER_FAILURE, error})
  }
}

/**
 * Getting email from backend using axios
 */
const getEmail = () => axios.get("http://localhost:3001/api/users", {
    headers:  { authorization: "bearer " + token }
  });