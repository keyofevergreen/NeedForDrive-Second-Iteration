import { createReducer } from '@reduxjs/toolkit';
import { CitiesState } from '../../types/Cities';
import { requestCities, requestCitiesError, requestCitiesSuccess } from './actions';

const citiesReducer = createReducer<CitiesState>({
  cities: null,
  loading: false,
  error: null,
}, {
  [requestCities.type]: (state) => ({
    ...state,
    cities: null,
    loading: true,
    error: null,
  }),
  [requestCitiesSuccess.type]: (state, { payload }) => ({
    ...state,
    cities: payload,
    loading: false,
    error: null,
  }),
  [requestCitiesError.type]: (state, { payload }) => ({
    ...state,
    cities: null,
    loading: false,
    error: payload,
  }),
});

export default citiesReducer;
