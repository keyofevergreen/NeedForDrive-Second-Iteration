import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from './thunks';
import { Dispatcher } from '../../types/store';
import { CitiesState } from '../../types/Cities';

export const useCities = (): [boolean, string | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { error, loading } = useSelector<{
    cities: CitiesState;
  }, CitiesState>((state) => state.cities);

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  return [loading, error];
};
