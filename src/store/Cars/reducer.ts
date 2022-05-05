import { createReducer } from '@reduxjs/toolkit';
import { CarsState } from '../../types/Cars';
import {
  requestCar, requestCarError,
  requestCars,
  requestCarsError,
  requestCarsSuccess, requestCarSuccess,
} from './actions';

const carsReducer = createReducer<CarsState>({
  cars: null,
  loading: false,
  error: null,
  carById: null,
  carByIdLoading: false,
  carByIdError: null,
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
  [requestCar.type]: (state) => ({
    ...state,
    carById: null,
    carByIdLoading: true,
    carByIdError: null,
  }),
  [requestCarSuccess.type]: (state, { payload }) => ({
    ...state,
    carById: payload,
    carByIdLoading: false,
    carByIdError: null,
  }),
  [requestCarError.type]: (state, { payload }) => ({
    ...state,
    carById: null,
    carByIdLoading: false,
    carByIdError: payload,
  })
});

export default carsReducer;
