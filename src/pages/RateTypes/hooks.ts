import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRateTypes } from '../../store/RateTypes/thunks';
import { Dispatcher } from '../../types/store';
import { RateTypeResponse, RateTypesState } from '../../types/RateTypes';

export const useRateTypes = (name?: string | null, page?: number): [RateTypeResponse, boolean, string | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { rateTypes, loading, error } = useSelector<{
    rateTypes: RateTypesState;
  }, RateTypesState>((state) => state.rateTypes);

  useEffect(() => {
    dispatch(fetchRateTypes(name, page));
  }, [name, page]);

  return [rateTypes, loading, error];
};
