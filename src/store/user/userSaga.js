import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

const token = localStorage.getItem("token")

export function* watcherSaga() {
  yield takeLatest("USER_REQUEST", workerSaga)
}

function* workerSaga(){
  try {
    const response = yield call(getEmail)
    const email = response.data.message;
    console.log(response)
    
    yield put({ type: "ACTION_USER_SUCCESS", email})
    
  } catch (error) {
    console.log(error)
  }
}

/**
 * Getting email from backend using axios
 */
function getEmail() {
  return axios.get("http://localhost:3001/api/users", {
    authorization: "bearer " + token
  })
}