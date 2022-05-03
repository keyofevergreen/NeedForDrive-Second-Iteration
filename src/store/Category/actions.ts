import { createAction } from '@reduxjs/toolkit';

export const requestCategories = createAction('Categories is fetching...');

export const requestCategoriesSuccess = createAction<object>('Categories has already fetched');

export const requestCategoriesError = createAction<number>('Categories fetched with error');

export const requestCategory = createAction('Category is fetching...');

export const requestCategorySuccess = createAction<object>('Category has already fetched');

export const requestCategoryError = createAction<number>('Category fetched with error');
