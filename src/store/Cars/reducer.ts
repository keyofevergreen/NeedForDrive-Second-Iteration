import { createReducer } from '@reduxjs/toolkit';
import { CarsState } from '../../types/Cars';
import { requestCars, requestCarsError, requestCarsSuccess } from './actions';

const carsReducer = createReducer<CarsState>({
  cars: null,
  loading: false,
  error: null,
}, {
  [requestCars.type]: (state) => ({
    ...state,
    cars: null,
    loading: true,
    error: null,
  }),
  [requestCarsSuccess.type]: (state, { payload }) => ({
    ...state,
    cars: payload,
    loading: false,
    error: null,
  }),
  [requestCarsError.type]: (state, { payload }) => ({
    ...state,
    cars: null,
    loading: false,
    error: payload,
  }),
});

export default carsReducer;
