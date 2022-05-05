import { createReducer } from '@reduxjs/toolkit';
import { ErrorHandlerState } from '../../types/Error';
import { addToErrorHandler, resetErrorHandler } from './actions';

const errorHandlerReducer = createReducer<ErrorHandlerState>({
  errors: [],
}, {
  [addToErrorHandler.type]: (state, { payload }) => ({
    ...state,
    errors: [...state.errors, payload],
  }),
  [resetErrorHandler.type]: (state) => ({
    ...state,
    errors: [],
  }),
});

export default errorHandlerReducer;
