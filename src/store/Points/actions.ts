import { createAction } from '@reduxjs/toolkit';

export const requestPoints = createAction('Points is fetching...');

export const requestPointsSuccess = createAction<object>('Points has already fetched');

export const requestPointsError = createAction<number>('Points fetched with error');

export const requestPoint = createAction('Point is fetching...');

export const requestPointSuccess = createAction<object>('Point has already fetched');

export const requestPointError = createAction<number>('Point fetched with error');
