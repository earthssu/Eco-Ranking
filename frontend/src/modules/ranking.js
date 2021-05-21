import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as rankAPI from '../lib/api/ranking';

const [SCHOOL, SCHOOL_SUCCESS, SCHOOL_FAILURE] =
  createRequestActionTypes('rank/SCHOOL');
const [AREA, AREA_SUCCESS, AREA__FAILURE] =
  createRequestActionTypes('rank/AREA');

export const schoolRanking = createAction(SCHOOL);
export const areaRanking = createAction(AREA);

const schoolRankingSaga = createRequestSaga(SCHOOL, rankAPI.schoolRanking);
const areaRankingSaga = createRequestSaga(AREA, rankAPI.areaRanking);
export function* rankingSaga() {
  yield takeLatest(SCHOOL, schoolRankingSaga);
  yield takeLatest(AREA, areaRankingSaga);
}

const initialState = {
  school: null,
  area: null,
  schoolError: null,
  areaError: null,
};

const ranking = handleActions(
  {
    [SCHOOL_SUCCESS]: (state, { payload: school }) => ({
      ...state,
      school,
    }),
    [SCHOOL_FAILURE]: (state, { payload: schoolError }) => ({
      ...state,
      schoolError,
    }),
    [AREA_SUCCESS]: (state, { payload: area }) => ({
      ...state,
      area,
    }),
    [AREA__FAILURE]: (state, { payload: areaError }) => ({
      ...state,
      areaError,
    }),
  },
  initialState,
);

export default ranking;
