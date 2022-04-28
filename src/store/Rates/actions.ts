import { createAction } from '@reduxjs/toolkit';

export const requestRate = createAction('Rates is fetching...');

export const requestRateSuccess = createAction<object>('Rates has already fetched');

export const requestRateError = createAction<number>('Rates fetched with error');
