import { ThunkResult } from '../../types/thunk';
import { AuthForm } from '../../types/Auth';
import { requestAuthToken, requestAuthTokenError, requestAuthTokenSuccess } from './actions';

export const fetchAuthToken = (loginData: AuthForm): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestAuthToken());
    const data = await services.auth.fetchAuthToken(loginData);
    dispatch(requestAuthTokenSuccess(data));
  } catch (error) {
    dispatch(requestAuthTokenError(error.message));
  }
};
