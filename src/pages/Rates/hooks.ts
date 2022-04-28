import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRates } from '../../store/Rates/thunks';
import { Dispatcher } from '../../types/store';
import { RateAxiosConfig, RateResponse, RateState } from '../../types/Rates';

export const useRates = (priceRange?: number[] | null, page?: number): [RateResponse, boolean, string | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { rates, loading, error } = useSelector<{
    rates: RateState;
  }, RateState>((state) => state.rates);

  useEffect(() => {
    const config: RateAxiosConfig = {
      params: {
        page,
        limit: 10,
      },
    };
    if (priceRange) {
      const [lowerPrice, higherPrice] = priceRange;
      config.params['price[$gt]'] = lowerPrice;
      config.params['price[$lt]'] = higherPrice;
    }
    dispatch(fetchRates(config));
  }, [priceRange, page]);

  return [rates, loading, error];
};
