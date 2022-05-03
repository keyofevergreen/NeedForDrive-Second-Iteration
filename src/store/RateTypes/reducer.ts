import { createReducer } from '@reduxjs/toolkit';
import { RateTypesState } from '../../types/RateTypes';
import {
  requestRateType, requestRateTypeError,
  requestRateTypes,
  requestRateTypesError,
  requestRateTypesSuccess,
  requestRateTypeSuccess
} from './actions';

const rateTypesReducer = createReducer<RateTypesState>({
  rateTypes: null,
  loading: false,
  error: null,
  rateTypeById: null,
  rateTypeByIdLoading: false,
  rateTypeByIdError: null,
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
  [requestRateType.type]: (state) => ({
    ...state,
    rateTypeById: null,
    rateTypeByIdLoading: true,
    rateTypeByIdError: null,
  }),
  [requestRateTypeSuccess.type]: (state, { payload }) => ({
    ...state,
    rateTypeById: payload,
    rateTypeByIdLoading: false,
    rateTypeByIdError: null,
  }),
  [requestRateTypeError.type]: (state, { payload }) => ({
    ...state,
    rateTypeById: null,
    rateTypeByIdLoading: false,
    rateTypeByIdError: payload,
  }),
});

export default rateTypesReducer;
