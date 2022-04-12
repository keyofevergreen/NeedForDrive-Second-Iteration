import { ThunkResult } from '../../types/thunk';
import { AuthForm } from '../../types/Auth';
import { requestAuthToken, requestAuthTokenError, requestAuthTokenSuccess } from './actions';

export const fetchAuthToken = (loginData: AuthForm): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestAuthToken());
    const { data } = await services.auth.login(loginData);
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('refresh', data.refresh_token);
    dispatch(requestAuthTokenSuccess(data));
  } catch (error) {
    dispatch(requestAuthTokenError(error.message));
  }
};
