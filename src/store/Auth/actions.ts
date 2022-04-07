import { createAction } from '@reduxjs/toolkit';

export const requestAuthToken = createAction('Auth token is fetching...');

export const requestAuthTokenSuccess = createAction<object>('Auth token has already fetched');

export const requestAuthTokenError = createAction<string>('Auth token fetched with error');

export const setAuth = createAction<boolean>('Setting Auth');
