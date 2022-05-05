import { createReducer } from '@reduxjs/toolkit';
import { PointsState } from '../../types/Points';
import {
  requestPoint,
  requestPointError,
  requestPoints,
  requestPointsError,
  requestPointsSuccess,
  requestPointSuccess
} from './actions';

const pointsReducer = createReducer<PointsState>({
  points: null,
  loading: false,
  error: null,
  pointById: null,
  pointByIdLoading: false,
  pointByIdError: null,
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
  [requestPoint.type]: (state) => ({
    ...state,
    pointById: null,
    pointByIdLoading: true,
    pointByIdError: null,
  }),
  [requestPointSuccess.type]: (state, { payload }) => ({
    ...state,
    pointById: payload,
    pointByIdLoading: false,
    pointByIdError: null,
  }),
  [requestPointError.type]: (state, { payload }) => ({
    ...state,
    pointById: null,
    pointByIdLoading: false,
    pointByIdError: payload,
  }),
});

export default pointsReducer;
