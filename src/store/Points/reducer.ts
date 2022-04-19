import { createReducer } from '@reduxjs/toolkit';
import { PointsState } from '../../types/Points';
import { requestPoints, requestPointsError, requestPointsSuccess } from './actions';

const pointsReducer = createReducer<PointsState>({
  points: null,
  loading: false,
  error: null,
}, {
  [requestPoints.type]: (state) => ({
    ...state,
    points: null,
    loading: true,
    error: null,
  }),
  [requestPointsSuccess.type]: (state, { payload }) => ({
    ...state,
    points: payload,
    loading: false,
    error: null,
  }),
  [requestPointsError.type]: (state, { payload }) => ({
    ...state,
    points: null,
    loading: false,
    error: payload,
  }),
});

export default pointsReducer;
