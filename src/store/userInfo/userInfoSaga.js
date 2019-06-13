import { takeLatest, call, put } from 'redux-saga/effects';
import axios from "axios";

export function* watcherSaga(){
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

function fetchUser(){
  return axios({
    method: "get",
    url: "http://localhost:3001/api/userDetails",
  });
}

function* workerSaga(){
  try {
    const response = yield call(fetchUser);
    const user = response.data.message;

    yield put({ type: "API_CALL_SUCCESS", user});

  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error});
  }
  
}