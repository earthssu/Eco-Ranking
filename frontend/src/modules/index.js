import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import ranking, { rankingSaga } from './ranking';
import write, { writeSaga } from './write';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  ranking,
  write,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), rankingSaga(), writeSaga()]);
}

export default rootReducer;
