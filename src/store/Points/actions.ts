import { createAction } from '@reduxjs/toolkit';

export const requestPoints = createAction('Points is fetching...');

export const requestPointsSuccess = createAction<object>('Points has already fetched');

export const requestPointsError = createAction<number>('Points fetched with error');
