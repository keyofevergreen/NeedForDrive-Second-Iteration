import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatcher } from '../../types/store';
import { AuthForm, AuthState } from '../../types/Auth';
import { fetchAuthToken } from './thunks';

export const useAuth = (form: AuthForm | null): [boolean, string | null, object] => {
  const dispatch = useDispatch<Dispatcher>();
  const { token, error, loading } = useSelector<{
    auth: AuthState;
  }, AuthState>((state) => state.auth);

  useEffect(() => {
    if (form) {
      dispatch(fetchAuthToken(form));
    }
  }, [form]);

  return [loading, error, token];
};
