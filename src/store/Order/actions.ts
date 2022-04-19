import { createAction } from '@reduxjs/toolkit';

export const requestOrder = createAction('Order is fetching...');

export const requestOrderSuccess = createAction<object>('Order has already fetched');

export const requestOrderError = createAction<string>('Order fetched with error');
