import { createReducer } from '@reduxjs/toolkit';
import { RateTypesState } from '../../types/RateTypes';
import { requestRateTypes, requestRateTypesError, requestRateTypesSuccess } from './actions';

const rateTypesReducer = createReducer<RateTypesState>({
  rateTypes: null,
  loading: false,
  error: null,
}, {
  [requestRateTypes.type]: (state) => ({
    ...state,
    rateTypes: null,
    loading: true,
    error: null,
  }),
  [requestRateTypesSuccess.type]: (state, { payload }) => ({
    ...state,
    rateTypes: payload,
    loading: false,
    error: null,
  }),
  [requestRateTypesError.type]: (state, { payload }) => ({
    ...state,
    rateTypes: null,
    loading: false,
    error: payload,
  }),
});

export default rateTypesReducer;
