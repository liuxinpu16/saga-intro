import {
  takeEvery,
  takeLatest,
  take,
  call,
  fork,
  put,
} from "redux-saga/effects";
import { get_users_success, user_error } from "../features/users/userSlice";
import * as api from "../api/users";

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    yield put(get_users_success({ items: result.data.data }));
  } catch (e) {
    yield put(user_error({ error: e }));
  }
}

function* watchGetUsersRequest() {
  yield takeEvery("get_users_request", getUsers);
}

function* createUser(action) {
  try {
    yield call(api.createUser, {
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
    });
    yield call(getUsers);
  } catch (e) {
    yield put(user_error({ error: e }));
  }
}

function* watchCreateUserRequest() {
  yield takeLatest("create_user", createUser);
}

function* deleteUser({ id }) {
  try {
    yield call(api.deleteUser, {
      id,
    });
    yield call(getUsers);
  } catch (e) {
    yield put(user_error({ error: e }));
  }
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take("delete_user");
    yield call(deleteUser, { id: action.payload.id });
  }
}
const usersSages = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest),
];

export default usersSages;
