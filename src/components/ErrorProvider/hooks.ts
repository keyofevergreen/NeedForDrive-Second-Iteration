import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { ErrorHandlerState } from '../../types/Error';
import { Dispatcher } from '../../types/store';
import { resetErrorHandler } from '../../store/ErrorProvider/actions';

export const useErrorHandler = (): number | null => {
  const dispatch = useDispatch<Dispatcher>();
  const { errors } = useSelector<{
    errorHandler: ErrorHandlerState;
  }, ErrorHandlerState>((state) => state.errorHandler);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    dispatch(resetErrorHandler());
  }, [pathname]);

  return errors.length > 0 ? errors[0] : null;
};
