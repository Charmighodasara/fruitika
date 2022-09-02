import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { signInApi, signOutApi, signUpApi } from '../../commen/apis/auth.api';
import { setAlert } from '../Action/alert.action';
import * as ActionTypes from '../ActionTypes'

function* signUp(action) {
  try {
    const user = yield call(signUpApi, action.payload);
    console.log(user);
    yield put(setAlert({ text: user.payload, color: "success" }))
  } catch (e) {
    console.log(e);
    yield put(setAlert({ text: e.payload, color: "error" }))
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}
function* signin(action) {
  try {
    const user = yield call(signInApi, action.payload);
    console.log(user);
    yield put(setAlert({ text: user.payload, color: "success" }))
  } catch (e) {
    console.log(e);
    yield put(setAlert({ text: e.payload, color: "error" }))
  }
}
function* signOut(action) {
  try {
    const user = yield call(signOutApi);
    console.log(user);
    yield put(setAlert({ text: user.payload, color: "success" }))
  } catch (e) {
    console.log(e);
    yield put(setAlert({ text: e.payload, color: "error" }))
  }
}

export function* watchSignup() {
  yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

export function* watchSignin() {
  yield takeEvery(ActionTypes.SIGNIN_USER, signin);
}
export function* watchSignout() {
  yield takeEvery(ActionTypes.SIGNOUT_USER, signOut);
}

export function* authsaga() {
  yield all([
    watchSignup(),
    watchSignin(),
    watchSignout()
  ])
}
