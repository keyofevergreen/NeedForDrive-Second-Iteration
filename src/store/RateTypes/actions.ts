import { createAction } from '@reduxjs/toolkit';

export const requestRateTypes = createAction('Rates types is fetching...');

export const requestRateTypesSuccess = createAction<object>('Rates types has already fetched');

export const requestRateTypesError = createAction<number>('Rates types fetched with error');

export const requestRateType = createAction('Rate type is fetching...');

export const requestRateTypeSuccess = createAction<object>('Rate type has already fetched');

export const requestRateTypeError = createAction<number>('Rate type fetched with error');
