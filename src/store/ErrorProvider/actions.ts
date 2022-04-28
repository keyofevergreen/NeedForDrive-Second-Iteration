import { createAction } from '@reduxjs/toolkit';

export const addToErrorHandler = createAction<number>('Error added to error handler');

export const resetErrorHandler = createAction('Error handler is reset');
