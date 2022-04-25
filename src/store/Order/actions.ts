import { createAction } from '@reduxjs/toolkit';

export const requestOrder = createAction('Order is fetching...');

export const requestOrderSuccess = createAction<object>('Order has already fetched');

export const requestOrderError = createAction<number>('Order fetched with error');
