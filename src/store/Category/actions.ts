import { createAction } from '@reduxjs/toolkit';

export const requestCategory = createAction('Category is fetching...');

export const requestCategorySuccess = createAction<object>('Category has already fetched');

export const requestCategoryError = createAction<number>('Category fetched with error');
