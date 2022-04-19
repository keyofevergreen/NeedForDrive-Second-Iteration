import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from './thunks';
import { Dispatcher } from '../../types/store';
import { CarResponse, CarsState } from '../../types/Cars';

export const useCars = (): [CarResponse, boolean, string | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { cars, loading, error } = useSelector<{
    cars: CarsState;
  }, CarsState>((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  return [cars, loading, error];
};
