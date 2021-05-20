import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import ranking, { rankingSaga } from './ranking';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  ranking,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), rankingSaga()]);
}

export default rootReducer;
