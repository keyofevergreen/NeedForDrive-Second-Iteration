import { createReducer } from '@reduxjs/toolkit';
import { CitiesState } from '../../types/Cities';
import {
  requestCities,
  requestCitiesError,
  requestCitiesSuccess,
  requestCity,
  requestCityError,
  requestCitySuccess
} from './actions';

const citiesReducer = createReducer<CitiesState>({
  cities: null,
  loading: false,
  error: null,
  cityById: null,
  cityByIdLoading: false,
  cityByIdError: null,
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
  [requestCity.type]: (state) => ({
    ...state,
    cityById: null,
    cityByIdLoading: true,
    cityByIdError: null,
  }),
  [requestCitySuccess.type]: (state, { payload }) => ({
    ...state,
    cityById: payload,
    cityByIdLoading: false,
    cityByIdError: null,
  }),
  [requestCityError.type]: (state, { payload }) => ({
    ...state,
    cityById: null,
    cityByIdLoading: false,
    cityByIdError: payload,
  }),
});

export default citiesReducer;
