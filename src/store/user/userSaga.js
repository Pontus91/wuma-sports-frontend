import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

const token = localStorage.getItem("token")

export function* watcherSaga() {
  yield takeLatest("USER_REQUEST", workerSaga)
}

function* workerSaga(){
  try {
    const response = yield call(getEmail)
    const email = response.data.email;
    
    yield put({ type: "GET_USER", email})
    
  } catch (error) {
    
  }
}

/**
 * Getting email from backend using axios
 */
function getEmail() {
  const headers = { authorization: "bearer " + token }
  return axios.get("http://localhost:3001/api/users", {
    headers
  })
}