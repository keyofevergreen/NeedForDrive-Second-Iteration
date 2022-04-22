import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../store/Cars/thunks';
import { Dispatcher } from '../../types/store';
import { CarResponse, CarSort, CarsState } from '../../types/Cars';

export const useCars = (sorts?: CarSort, page?: number): [CarResponse, boolean, string | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { cars, loading, error } = useSelector<{
    cars: CarsState;
  }, CarsState>((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars(sorts, page));
  }, [sorts, page]);

  return [cars, loading, error];
};
