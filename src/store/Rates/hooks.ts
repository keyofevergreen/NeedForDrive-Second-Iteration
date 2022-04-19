import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRates } from './thunks';
import { Dispatcher } from '../../types/store';
import { RateState } from '../../types/Rates';

export const useRates = (): [boolean, string | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { error, loading } = useSelector<{
    rates: RateState;
  }, RateState>((state) => state.rates);

  useEffect(() => {
    dispatch(fetchRates());
  }, []);

  return [loading, error];
};
