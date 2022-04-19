import { createReducer } from '@reduxjs/toolkit';
import { requestRate, requestRateError, requestRateSuccess } from './actions';
import { RateState } from '../../types/Rates';

const rateReducer = createReducer<RateState>({
  rates: null,
  loading: false,
  error: null,
}, {
  [requestRate.type]: (state) => ({
    ...state,
    rates: null,
    loading: true,
    error: null,
  }),
  [requestRateSuccess.type]: (state, { payload }) => ({
    ...state,
    rates: payload,
    loading: false,
    error: null,
  }),
  [requestRateError.type]: (state, { payload }) => ({
    ...state,
    rates: null,
    loading: false,
    error: payload,
  }),
});

export default rateReducer;
