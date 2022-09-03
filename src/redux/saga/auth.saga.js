import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { signInApi, signOutApi, signUpApi } from '../../commen/apis/auth.api';
import { history } from '../../history';
import { setAlert } from '../Action/alert.action';
import { signedInAction, signedoutInAction } from '../Action/auth.action';
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
    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);
    yield put(signedInAction(user))
    history.push('/')
    
  } catch (e) {
    console.log(e);
    yield put(setAlert({ text: e.payload, color: "error" }))
  }
}

function* signOut(action) {
  try {
      const user = yield call(signOutApi)
      yield put(setAlert({ text: user.payload, color: "success" }))
      console.log(user);
      yield put(signedoutInAction(user))
      history.push('/')

  } catch (error) {
      console.log(error);
      yield put(setAlert({ text: error.payload, color: "error" }))
  }
}

export function* watchSignup() {
  yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

export function* watchSignin() {
  yield takeEvery(ActionTypes.SIGNIN_USER, signin);
}
export function* watchSignout() {
  yield takeEvery(ActionTypes.SIGNOUT_USER , signOut);
}

export function* authsaga() {
  yield all([
    watchSignup(),
    watchSignin(),
    watchSignout()
  ])
}
