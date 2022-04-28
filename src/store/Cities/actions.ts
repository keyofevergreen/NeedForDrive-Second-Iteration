import { createAction } from '@reduxjs/toolkit';

export const requestCities = createAction('Cities is fetching...');

export const requestCitiesSuccess = createAction<object>('Cities has already fetched');

export const requestCitiesError = createAction<string>('Cities fetched with error');
