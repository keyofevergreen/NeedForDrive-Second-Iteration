import { createAction } from '@reduxjs/toolkit';

export const requestCars = createAction('Cars is fetching...');

export const requestCarsSuccess = createAction<object>('Cars has already fetched');

export const requestCarsError = createAction<number>('Cars fetched with error');

export const requestCar = createAction('Car is fetching...');

export const requestCarSuccess = createAction<object>('Car has already fetched');

export const requestCarError = createAction<number>('Car fetched with error');
