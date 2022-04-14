import { createReducer } from '@reduxjs/toolkit';
import { AuthState } from '../../types/Auth';
import { requestAuthToken, requestAuthTokenError, requestAuthTokenSuccess, setAuth } from './actions';

const authReducer = createReducer<AuthState>({
  token: null,
  loading: false,
  error: null,
  isAuth: false,
}, {
  [requestAuthToken.type]: (state) => ({
    ...state,
    token: null,
    loading: true,
    error: null,
  }),
  [requestAuthTokenSuccess.type]: (state, { payload }) => ({
    ...state,
    token: payload,
    loading: false,
    error: null,
  }),
  [requestAuthTokenError.type]: (state, { payload }) => ({
    ...state,
    token: null,
    loading: false,
    error: payload,
  }),
  [setAuth.type]: (state, { payload }) => ({
    ...state,
    isAuth: payload,
  }),
});

export default authReducer;
