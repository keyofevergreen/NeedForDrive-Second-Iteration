import { createAction } from '@reduxjs/toolkit';

export const requestOrderStatuses = createAction('Order statuses is fetching...');

export const requestOrderStatusesSuccess = createAction<object>('Order statuses has already fetched');

export const requestOrderStatusesError = createAction<number>('Order statuses fetched with error');

export const requestOrderStatus = createAction('Order status is fetching...');

export const requestOrderStatusSuccess = createAction<object>('Order status has already fetched');

export const requestOrderStatusError = createAction<number>('Order status fetched with error');

export const setSubmittedStatusId = createAction<string>('Submitted status is setting');

export const setCanceledStatusId = createAction<string>('Canceled status is setting');
