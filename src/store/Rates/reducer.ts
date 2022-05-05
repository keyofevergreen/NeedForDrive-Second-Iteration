import { createReducer } from '@reduxjs/toolkit';
import {
  requestRate,
  requestRateError,
  requestRates,
  requestRatesError,
  requestRatesSuccess,
  requestRateSuccess
} from './actions';
import { RateState } from '../../types/Rates';

const rateReducer = createReducer<RateState>({
  rates: null,
  loading: false,
  error: null,
  rateById: null,
  rateByIdLoading: false,
  rateByIdError: null,
}, {
  [requestRates.type]: (state) => ({
    ...state,
    rates: null,
    loading: true,
    error: null,
  }),
  [requestRatesSuccess.type]: (state, { payload }) => ({
    ...state,
    rates: payload,
    loading: false,
    error: null,
  }),
  [requestRatesError.type]: (state, { payload }) => ({
    ...state,
    rates: null,
    loading: false,
    error: payload,
  }),
  [requestRate.type]: (state) => ({
    ...state,
    rateById: null,
    rateByIdLoading: true,
    rateByIdError: null,
  }),
  [requestRateSuccess.type]: (state, { payload }) => ({
    ...state,
    rateById: payload,
    rateByIdLoading: false,
    rateByIdError: null,
  }),
  [requestRateError.type]: (state, { payload }) => ({
    ...state,
    rateById: null,
    rateByIdLoading: false,
    rateByIdError: payload,
  }),
});

export default rateReducer;
