import { createAction } from '@reduxjs/toolkit';

export const requestCities = createAction('Cities is fetching...');

export const requestCitiesSuccess = createAction<object>('Cities has already fetched');

export const requestCitiesError = createAction<number>('Cities fetched with error');

export const requestCity = createAction('City is fetching...');

export const requestCitySuccess = createAction<object>('City has already fetched');

export const requestCityError = createAction<number>('City fetched with error');
