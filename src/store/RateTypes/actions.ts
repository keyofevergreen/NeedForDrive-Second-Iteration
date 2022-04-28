import { createAction } from '@reduxjs/toolkit';

export const requestRateTypes = createAction('Rates types is fetching...');

export const requestRateTypesSuccess = createAction<object>('Rates types has already fetched');

export const requestRateTypesError = createAction<number>('Rates types fetched with error');
