import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../../store/Cities/thunks';
import { Dispatcher } from '../../types/store';
import { CitiesState, City } from '../../types/Cities';
import { SearchState } from '../../types/Search';

export const useCities = (): [City[], boolean, string | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { cities, loading, error } = useSelector<{
    cities: CitiesState;
  }, CitiesState>((state) => state.cities);

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  return [cities, loading, error];
};

export const useSearchSortedCities = (cities: City[]): City[] => {
  const { searchSort } = useSelector<{
    search: SearchState;
  }, SearchState>((state) => state.search);

  if (cities) {
    return cities.filter((city) => city.name.includes(searchSort));
  }
  return [];
};
