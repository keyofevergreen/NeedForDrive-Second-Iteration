import { createAction } from '@reduxjs/toolkit';

export const requestCars = createAction('Cars is fetching...');

export const requestCarsSuccess = createAction<object>('Cars has already fetched');

export const requestCarsError = createAction<number>('Cars fetched with error');
