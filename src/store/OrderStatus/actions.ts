import { createAction } from '@reduxjs/toolkit';

export const requestOrderStatus = createAction('Order status is fetching...');

export const requestOrderStatusSuccess = createAction<object>('Order status has already fetched');

export const requestOrderStatusError = createAction<number>('Order status fetched with error');
