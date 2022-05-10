import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRates } from '../../store/Rates/thunks';
import { Dispatcher } from '../../types/store';
import { RateResponse, RateState } from '../../types/Rates';
import createRateAxiosConfig from './createRateAxiosConfig';

export const useRates = (priceRange?: number[] | null, page?: number): [RateResponse, boolean, number | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { rates, loading, error } = useSelector<{
    rates: RateState;
  }, RateState>((state) => state.rates);
  const [currentPriceRange, setCurrentPriceRange] = useState<number[] | null>(priceRange);
  const [currentPage, setCurrentPage] = useState<number>(page);

  useEffect(() => {
    const config = createRateAxiosConfig(priceRange, page);
    dispatch(fetchRates(config));
  }, []);

  useEffect(() => {
    const [lowerPrice, higherPrice] = priceRange;
    if (!currentPriceRange.includes(lowerPrice) || !currentPriceRange.includes(higherPrice) || currentPage !== page) {
      const config = createRateAxiosConfig(priceRange, page);
      dispatch(fetchRates(config));
      setCurrentPriceRange(priceRange);
      setCurrentPage(page);
    }
  }, [priceRange, page]);

  return [rates, loading, error];
};
