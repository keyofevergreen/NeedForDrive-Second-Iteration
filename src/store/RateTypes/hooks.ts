import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRateTypes } from './thunks';
import { Dispatcher } from '../../types/store';
import { RateTypesState } from '../../types/RateTypes';

export const useRateTypes = (): [boolean, string | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { error, loading } = useSelector<{
    rateTypes: RateTypesState;
  }, RateTypesState>((state) => state.rateTypes);

  useEffect(() => {
    dispatch(fetchRateTypes());
  }, []);

  return [loading, error];
};
