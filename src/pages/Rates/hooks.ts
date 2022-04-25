import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRates } from '../../store/Rates/thunks';
import { Dispatcher } from '../../types/store';
import { RateResponse, RateState } from '../../types/Rates';

export const useRates = (priceRange?: number[] | null, page?: number): [RateResponse, boolean, number | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { rates, loading, error } = useSelector<{
    rates: RateState;
  }, RateState>((state) => state.rates);

  useEffect(() => {
    dispatch(fetchRates(priceRange, page));
  }, [priceRange, page]);

  return [rates, loading, error];
};
