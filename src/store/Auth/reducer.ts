import { createReducer } from '@reduxjs/toolkit';
import { AuthState } from '../../types/Auth';
import { requestAuthToken, requestAuthTokenError, requestAuthTokenSuccess } from './actions';

const authReducer = createReducer<AuthState>({
  token: null,
  loading: false,
  error: null,
}, {
  [requestAuthToken.type]: () => ({
    token: null,
    loading: true,
    error: null,
  }),
  [requestAuthTokenSuccess.type]: (state, { payload }) => ({
    token: payload,
    loading: false,
    error: null,
  }),
  [requestAuthTokenError.type]: (state, { payload }) => ({
    token: null,
    loading: false,
    error: payload,
  }),
});

export default authReducer;
