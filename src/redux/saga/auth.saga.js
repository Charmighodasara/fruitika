import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { signInApi, signUpApi } from '../../commen/apis/auth.api';
import * as ActionTypes from '../ActionTypes'

function* signUp(action) {
  try {
    const user = yield call(signUpApi, action.payload);
    console.log(user);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    console.log(e);
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}
function* signin(action) {
  try {
    const user = yield call(signInApi, action.payload);
    console.log(user);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    console.log(e);
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

export function* watchSignup() {
  yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

export function* watchSignin() {
  yield takeEvery(ActionTypes.SIGNIN_USER, signin);
}

export function* authsaga() {
  yield all([
    watchSignup(),
    watchSignin()
  ])
}
