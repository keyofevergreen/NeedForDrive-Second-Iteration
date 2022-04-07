import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatcher } from '../../types/store';
import { AuthForm, AuthState } from '../../types/Auth';
import { fetchAuthToken } from './thunks';
import { setAuth } from './actions';

export const useAuth = (form: AuthForm | null): [boolean, string | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { token, error, loading } = useSelector<{
    auth: AuthState;
  }, AuthState>((state) => state.auth);

  useEffect(() => {
    if (form) {
      dispatch(fetchAuthToken(form));
    }
  }, [form]);

  useEffect(() => {
    if (token) {
      dispatch(setAuth(true));
    }
  }, [token]);

  return [loading, error];
};
