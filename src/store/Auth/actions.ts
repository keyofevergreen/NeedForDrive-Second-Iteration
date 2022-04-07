import { createAction } from '@reduxjs/toolkit';
import { Token } from '../../types/Auth';

export const requestAuthToken = createAction('Auth token is fetching...');

export const requestAuthTokenSuccess = createAction<Token>('Auth token has already fetched');

export const requestAuthTokenError = createAction<string>('Auth token fetched with error');
