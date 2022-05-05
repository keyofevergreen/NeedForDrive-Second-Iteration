import { createAction } from '@reduxjs/toolkit';

export const requestRates = createAction('Rates is fetching...');

export const requestRatesSuccess = createAction<object>('Rates has already fetched');

export const requestRatesError = createAction<number>('Rates fetched with error');

export const requestRate = createAction('Rate is fetching...');

export const requestRateSuccess = createAction<object>('Rate has already fetched');

export const requestRateError = createAction<number>('Rate fetched with error');
